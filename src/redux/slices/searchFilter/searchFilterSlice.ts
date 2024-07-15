import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Filter = 'agent' | 'property';

type InitialState = {
  loading: boolean;
  filter: Filter;
};

const initialState: InitialState = {
  loading: false,
  filter: 'property',
};

const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export default searchFilterSlice.reducer;
export const {changeFilter} = searchFilterSlice.actions;
