import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { RootState } from './store'
import { ApiConfiguration } from '../constants/api'

const baseQuery = fetchBaseQuery({
  baseUrl: ApiConfiguration.rootUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export default baseQuery