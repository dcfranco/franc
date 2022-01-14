import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { DbPanelApi, SchematicsApi } from '../components/organisms';
import { PanelApi } from '../components/atoms/Panel'
import { FeatureApi } from '../components/atoms/Feature'
export const store = configureStore({
  reducer: {
    [DbPanelApi.reducerPath]: DbPanelApi.reducer,
    [SchematicsApi.reducerPath]: SchematicsApi.reducer,
    [PanelApi.reducerPath]: PanelApi.reducer,
    [FeatureApi.reducerPath]: FeatureApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(SchematicsApi.middleware, DbPanelApi.middleware, PanelApi.middleware, FeatureApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;

 export default store;