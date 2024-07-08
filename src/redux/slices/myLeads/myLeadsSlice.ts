import {createSlice} from '@reduxjs/toolkit';
import {IMyLead} from '../../../components/types';
import IMAGES from '../../../constants/images';

type InitialState = {
  loading: boolean;
  myLeads: IMyLead[];
  error: null | undefined | string;
};

const initialState: InitialState = {
  loading: false,
  myLeads: [
    {
      id: 1,
      type: 'buyer',
      image: IMAGES.Avatar2,
      address: 'Miami, FL',
    },
    {
      id: 2,
      type: 'buyer',
      image: IMAGES.Avatar,
      address: 'Miami, FL',
    },
    {
      id: 3,
      type: 'buyer',
      image: IMAGES.Avatar4,
      address: 'Miami, FL',
    },
    {
      id: 4,
      type: 'buyer',
      image: IMAGES.Avatar5,
      address: 'Miami, FL',
    },
  ],
  error: null,
};

const myLeadsSlice = createSlice({
  name: 'myLeads',
  initialState,
  reducers: {},
});

export default myLeadsSlice.reducer;
