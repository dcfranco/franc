import type { NextPage } from 'next';
import React from 'react';
import { ReactNode } from 'react';
import './FeatureList.scss';

const FeatureList: NextPage<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <div className="container-fluid h-50 my-auto feature-list">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-8 col-md-7 col-lg-6">
          <div className="row feature-list__items">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
