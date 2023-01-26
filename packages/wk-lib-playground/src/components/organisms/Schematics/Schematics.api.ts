// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { SchematicObjectWithRelations } from '../../../interfaces/schematic-object-with-relations';
import baseApi from '../../../core/api';
import { Filter } from '../../../builders/Filter';

// Define a service using a base URL and expected endpoints
const schematicsApi = createApi({
  reducerPath: 'schematicsApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    get: builder.query<SchematicObjectWithRelations, {id: number, filter: Filter}>({
      query: ({id, filter}) => ({
        url: `schematic-objects/${id}`,
        params: {
          filter: JSON.stringify(filter)
        }
      })
    }),
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuery } = schematicsApi;
export const { endpoints, reducerPath, reducer, middleware } = schematicsApi
