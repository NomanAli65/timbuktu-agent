import {createSlice} from '@reduxjs/toolkit';
import {IPropertyDetails} from '../../../components/types';
import {isPendingAction, isRejectedAction} from '../utils';
import {getProperties} from './listingThunks';

type InitialState = {
  loading: boolean;
  properties: IPropertyDetails[];
  error: string | null | undefined;
};

const initialState: InitialState = {
  loading: false,
  properties: [],
  error: null,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
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

export default listingsSlice.reducer;
