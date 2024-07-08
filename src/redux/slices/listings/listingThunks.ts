import {createAsyncThunk} from '@reduxjs/toolkit';
import listingActions from './listingActions';
import IMAGES from '../../../constants/images';

export const getProperties = createAsyncThunk(
  listingActions.getListing,
  (_, {rejectWithValue}) => {
    try {
      return [
        {
          id: 1,
          title: 'Florida Summer House',
          price: 15000,
          beds: 3,
          baths: 3,
          sqft: 4301,
          image: IMAGES.House1,
        },
        {
          id: 2,
          title: 'Florida Summer House',
          price: 15000,
          beds: 3,
          baths: 3,
          sqft: 4301,
          image: IMAGES.House2,
        },
        {
          id: 3,
          title: 'Florida Summer House',
          price: 15000,
          beds: 3,
          baths: 3,
          sqft: 4301,
          image: IMAGES.House3,
        },
        {
          id: 4,
          title: 'Florida Summer House',
          price: 15000,
          beds: 3,
          baths: 3,
          sqft: 4301,
          image: IMAGES.House4,
        },
      ];
    } catch (err: any) {
      return rejectWithValue('An error occurred');
    }
  },
);

export const postProperty = createAsyncThunk(
  listingActions.postProperty,
  () => {},
);
