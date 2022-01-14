// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { Filter } from '../../../builders/Filter';
import baseApi from '../../../core/api';
import { DbPanelWithRelations } from '../../../interfaces/db-panel-with-relations';

// Define a service using a base URL and expected endpoints
const dbPanelApi = createApi({
  reducerPath: 'dbPanelApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    getMetadata: builder.query<DbPanelWithRelations, {id: number, filter: Filter}>({
      query: ({ id, filter }) => ({ url: `db-panels/${id}/metadata`, params: { filter: JSON.stringify(filter)} })
    }),
    getRecords: builder.query<any, {id: number, filter?: Filter}>({
      query: ({id, filter}) => ({ url: `db-panels/${id}/datasource`, params: filter ? { filter: JSON.stringify(filter)} : {}})
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMetadataQuery, useGetRecordsQuery } = dbPanelApi;
export const { endpoints, reducerPath, reducer, middleware } = dbPanelApi
