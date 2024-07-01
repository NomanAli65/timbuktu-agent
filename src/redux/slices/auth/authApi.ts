import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['auth'],
  endpoints: build => ({
    loginUser: build.mutation({
      query: () => 'users/1',
    }),
  }),
});

export const {useLoginUserMutation} = authApi;
