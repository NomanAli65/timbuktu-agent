import {createAsyncThunk} from '@reduxjs/toolkit';
import referralAgentsAction from './referralAgentsAction';
import IMAGES from '../../../constants/images';

export const getAgentsAsync = createAsyncThunk(
  referralAgentsAction.getReferralAgents,
  (_, {rejectWithValue}) => {
    try {
      return [
        {
          id: 501230,
          rating: 3.75,
          address: 'Miami, FL',
          image: IMAGES.Avatar,
        },
        {
          id: 501231,
          rating: 3.75,
          address: 'Miami, FL',
          image: IMAGES.Avatar,
        },
        {
          id: 501232,
          rating: 3.75,
          address: 'Miami, FL',
          image: IMAGES.Avatar,
        },
      ];
    } catch (err) {
      console.log(err);
      return rejectWithValue('Something went wrong...');
    }
  },
);
