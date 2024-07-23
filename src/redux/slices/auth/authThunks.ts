import {createAsyncThunk} from '@reduxjs/toolkit';
import authActions from './authActions';

export const loginAsync = createAsyncThunk(authActions.LOGIN, async () => {
  try {
    return true;
  } catch (err) {
    console.log(err);
  }
});

export const signupAsNonMemberOrGuestAync = createAsyncThunk(
  authActions.REGISTER_AS_NON_MEMBER_OR_GUEST,
  async () => {
    try {
      return true;
    } catch (err) {
      console.log(err);
    }
  },
);

export const signupAsAgentOrMemberAync = createAsyncThunk(
  authActions.REGISTER_AS_AGENT_OR_MEMBER,
  async () => {
    try {
      return true;
    } catch (err) {
      console.log(err);
    }
  },
);

export const changePasswordAsync = createAsyncThunk(
  authActions.CHANGE_PASSWORD,
  async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  },
);

export const forgotPasswordAsync = createAsyncThunk(
  authActions.FORGOT_PASSWORD,
  async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  },
);
