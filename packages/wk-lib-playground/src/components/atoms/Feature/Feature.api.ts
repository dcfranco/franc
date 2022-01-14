// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { Filter } from '../../../builders/Filter';
import baseApi from '../../../core/api';
import { FeatureWithRelations } from '../../../interfaces/feature-with-relations';

// Define a service using a base URL and expected endpoints
const featureApi = createApi({
  reducerPath: 'featureApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    get: builder.query<FeatureWithRelations, {id: number, filter?: Filter}>({
      query: ({id, filter}) => ({
        url: `features/${id}`,
        params: filter ? { filter: JSON.stringify(filter)} : {}
      })
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuery } = featureApi;
export const { endpoints, reducerPath, reducer, middleware } = featureApi
