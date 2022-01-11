import type { NextPage } from 'next';
import React from 'react';
import { ReactNode } from 'react';
import './Feature.scss';

const FeatureContainer: NextPage<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <div className="container-fluid h-100 feature">
      <div className="row w-100">{children}</div>
    </div>
  );
};

export default FeatureContainer;
