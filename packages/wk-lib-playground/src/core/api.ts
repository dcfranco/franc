import { fetchBaseQuery } from '@reduxjs/toolkit/query'
// import type { RootState } from './store'
import { ApiConfiguration } from '../constants/api'

const baseQuery = fetchBaseQuery({
  baseUrl: ApiConfiguration.rootUrl,
  
})

export default baseQuery