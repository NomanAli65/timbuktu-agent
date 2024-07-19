import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPropertyDetails} from '../../../components/types';
import {isPendingAction, isRejectedAction} from '../utils';
import {getProperties} from './listingThunks';

type InitialState = {
  loading: boolean;
  properties: IPropertyDetails[];
  error: string | null | undefined;
  savable?: boolean;
};

const initialState: InitialState = {
  loading: false,
  properties: [],
  error: null,
  savable: false,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setSavable: (state, action: PayloadAction<boolean>) => {
      state.savable = action.payload;
    },
  },
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
export const {setSavable} = listingsSlice.actions;
