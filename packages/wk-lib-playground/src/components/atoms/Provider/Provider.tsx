import store from '../../../core/store';
import type { NextPage } from 'next';
import React from 'react';
import { ReactNode } from 'react';
import { Provider as ProviderRedux } from 'react-redux';

const Provider: NextPage<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <ProviderRedux store={store} >
      { children }
    </ProviderRedux>
  );
};

export default Provider;
