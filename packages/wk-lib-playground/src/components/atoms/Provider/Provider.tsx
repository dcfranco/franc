import type { NextPage } from 'next';
import React from 'react';
import { Provider as ProviderRedux } from 'react-redux';
import store from '../../../core/store';

const Provider: NextPage<{
  children?: any;
}> = ({ children }) => {
  return <ProviderRedux store={store}>{children}</ProviderRedux>;
};

export default Provider;
