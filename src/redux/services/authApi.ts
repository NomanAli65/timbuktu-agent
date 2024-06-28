import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    loginUser: build.query({
      query: () => 'posts',
    }),
  }),
});

export const {useLoginUserQuery} = authApi;
