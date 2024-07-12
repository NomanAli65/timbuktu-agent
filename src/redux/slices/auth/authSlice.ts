import {createSlice} from '@reduxjs/toolkit';
import {loginAsync, signupAsync} from './authThunks';
import {isPendingAction, isRejectedAction} from '../utils';
import {UserTypes} from '../../../constants/values';

type InitialState = {
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null | undefined;
  type: 'Agent' | 'Member' | null;
};

const initialState: InitialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  type: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.type = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
        state.type = UserTypes.Agent;
      })
      .addCase(signupAsync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
        state.type = UserTypes.Member;
      })
      .addMatcher(isPendingAction, state => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
