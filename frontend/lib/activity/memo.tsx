import React, { ReactElement } from 'react';
import fetch from 'isomorphic-unfetch';
import { getServerSetting } from '../utils/getServerSetting';

export interface MemoContents {
  category: string | null | undefined;
  contents: string | null | undefined;
  updated_at: string | null | undefined;

  /** Any custom claim which could be in the profile */
  [key: string]: unknown;
}

interface MemoContext {
  memo: MemoContents | null;

  loading: boolean;
}

// Use a global to save the memo, so we don't have to fetch it again after page navigations
let memoState: MemoContents;

const Memo = React.createContext<MemoContext>({ memo: null, loading: false });

export const fetchMemo = async (): Promise<MemoContents> => {
  if (memoState !== undefined) {
    return memoState;
  }

  const accessTokenRes = await fetch('/api/activities/memo');
  const accessToken = await accessTokenRes.statusText;
  const res = await fetch(getServerSetting('BACKEND_API_HOST', 'http://localhost:3000'), {
    method: 'GET',
    headers: { Authorization: `Bearer:${accessToken}` },
    mode: 'cors'
  });
  memoState = res.ok && res.status == 200 ? await res.json() : { Error: 'AuthError' };
  return memoState;
};

type MemoProviderProps = { value: MemoContext; children: React.ReactNode };

export const MemoProvider = ({ value, children }: MemoProviderProps): ReactElement<MemoContext> => {
  const { memo } = value;

  // If the memo was fetched in SSR add it to memoState so we don't fetch it again
  React.useEffect(() => {
    if (!memoState && memo) {
      memoState = memo;
    }
  }, []);

  return <Memo.Provider value={value}>{children}</Memo.Provider>;
};

export const useMemo = (): MemoContext => React.useContext(Memo);

export const useFetchMemo = (): MemoContext => {
  const [data, setMemo] = React.useState({
    memo: memoState || null,
    loading: memoState === undefined
  });

  React.useEffect(() => {
    if (memoState !== undefined) {
      return;
    }

    let isMounted = true;

    fetchMemo().then((memo) => {
      // Only set the memo if the component is still mounted
      if (isMounted) {
        setMemo({ memo, loading: false });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [memoState]);

  return data;
};
