import { combineReducers } from '@reduxjs/toolkit';
import UserModule from '../../lib/slice/userModule';

const rootReducer = combineReducers({
  user: UserModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
