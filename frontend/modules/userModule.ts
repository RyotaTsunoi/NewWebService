import { createSlice } from '@reduxjs/toolkit';

type UserProfile = {
  email: string | null | undefined;

  email_verified: boolean | null | undefined;

  name: string | null | undefined;

  nickname: string | null | undefined;

  picture: string | null | undefined;

  sub: string | null | undefined;

  updated_at: string | null | undefined;

  /** Any custom claim which could be in the profile */
  [key: string]: unknown;
};

export type UserSession = {
  user: UserProfile | null;
  idToken?: string | undefined;
  accessToken?: string | undefined;
  accessTokenExpiresAt?: number;
  accessTokenScope?: string | undefined;
  refreshToken?: string | undefined;
  createdAt: number;
};

type State = {
  userSession: UserSession | null;
  loading: boolean;
  error: any;
};

const initialState: State = {
  userSession: null,
  loading: true,
  error: null
};

const userModule = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart(state: State) {
      state.loading = true;
      state.error = null;
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure(state: State, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSuccess(state: State, action) {
      state.loading = false;
      state.error = null;
      state.userSession = action.payload;
      console.log(state, 'inSucToken');
    }
  }
});

export const { fetchStart, fetchFailure, fetchSuccess } = userModule.actions;
export default userModule;

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await fetchUserAccessToken()));
  } catch (error) {
    dispatch(fetchFailure(error.stack));
  }
};

const fetchUserAccessToken = async (): Promise<UserSession> => {
  let userSession: UserSession = null;
  const res = await fetch('/api/user/userSession');
  userSession = res.ok ? await res.json() : null;
  return userSession;
};
