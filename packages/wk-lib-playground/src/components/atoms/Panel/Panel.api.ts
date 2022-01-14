// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { PanelWithRelations } from '../../../interfaces/panel-with-relations';
import { Filter } from '../../../builders/Filter';
import baseApi from '../../../core/api';

// Define a service using a base URL and expected endpoints
const panelApi = createApi({
  reducerPath: 'panelApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    get: builder.query<PanelWithRelations, {id: number, filter?: Filter}>({
      query: ({id, filter}) => ({
        url: `panels/${id}`,
        params: filter ? { filter: JSON.stringify(filter)} : {}
      })
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuery } = panelApi;
export const { endpoints, reducerPath, reducer, middleware } = panelApi
