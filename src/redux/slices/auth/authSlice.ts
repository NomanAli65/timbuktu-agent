import {createSlice} from '@reduxjs/toolkit';
import {
  loginAsync,
  signupAsAgentOrMemberAync,
  signupAsNonMemberOrGuestAync,
} from './authThunks';
import {isPendingAction, isRejectedAction} from '../utils';
import {UserTypes} from '../../../constants/values';

type InitialState = {
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null | undefined;
  type: 'AgentOrMember' | 'NonMemberOrGuest' | null;
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
        state.type = UserTypes.AgentOrMember;
      })
      .addCase(signupAsNonMemberOrGuestAync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
        state.type = UserTypes.NonMemberOrGuest;
      })
      .addCase(signupAsAgentOrMemberAync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
        state.type = UserTypes.AgentOrMember;
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
