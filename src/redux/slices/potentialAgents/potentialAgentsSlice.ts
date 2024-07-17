import {createSlice} from '@reduxjs/toolkit';
import {IPotentialAgent} from '../../../components/types';
import IMAGES from '../../../constants/images';

type InitialState = {
  loading: boolean;
  potentialAgents: IPotentialAgent[];
  error: null | undefined | string;
};

const initialState: InitialState = {
  loading: false,
  potentialAgents: [
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

const potentialAgentsSlice = createSlice({
  name: 'myLeads',
  initialState,
  reducers: {},
});

export default potentialAgentsSlice.reducer;
