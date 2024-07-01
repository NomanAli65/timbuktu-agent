import {PayloadAction, SerializedError, createSlice} from '@reduxjs/toolkit';

type InitialState = {
  loading: boolean;
  isLoggedIn: boolean;
  error: SerializedError | null;
};

const initialState: InitialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {setLoggedIn} = authSlice.actions;
