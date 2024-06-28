import {SerializedError, createSlice} from '@reduxjs/toolkit';
import {loginAsync, registerAsync} from './authThunks';

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
  reducers: {},
  extraReducers: builder => {
    builder
      //LOGIN
      .addCase(loginAsync.pending, state => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        console.log({error: action.error});
      })

      //REGISTER
      .addCase(registerAsync.pending, state => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export default authSlice.reducer;
