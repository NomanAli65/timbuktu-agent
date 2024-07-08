import {createSlice} from '@reduxjs/toolkit';
import {IReferralAgent} from '../../../components/types';
import {getAgentsAsync} from './referralAgentsThunks';
import {isPendingAction, isRejectedAction} from '../utils';

type InitialState = {
  loading: boolean;
  referralAgents: IReferralAgent[];
  error: string | null | undefined;
};

const initialState: InitialState = {
  loading: false,
  referralAgents: [],
  error: null,
};

const referralAgentsSlice = createSlice({
  name: 'referralAgents',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAgentsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.referralAgents = action.payload;
      })
      .addMatcher(isPendingAction, (state, action) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});

export default referralAgentsSlice.reducer;
