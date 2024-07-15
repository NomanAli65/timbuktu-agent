import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import listingSlice from './slices/listings/listingSlice';
import referralAgentsSlice from './slices/referralAgents/referralAgentsSlice';
import myLeadsSlice from './slices/myLeads/myLeadsSlice';
import searchFilterSlice from './slices/searchFilter/searchFilterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    listings: listingSlice,
    referralAgents: referralAgentsSlice,
    myLeads: myLeadsSlice,
    searchFilters: searchFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
