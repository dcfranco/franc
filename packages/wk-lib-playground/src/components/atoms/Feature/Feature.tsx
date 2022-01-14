import SchematicsHandler from '../../organisms/Schematics/SchematicsHandler';
import type { NextPage } from 'next';
import React from 'react';
import { ReactNode } from 'react';
import './Feature.scss';
import { FeatureWithRelations } from '../../../interfaces/feature-with-relations';


export enum FeatureEvents {
  onActivate
}

export type FeatureHandler = SchematicsHandler<FeatureEvents, FeatureWithRelations>;

const FeatureContainer: NextPage<{
  children?: ReactNode;
  handler: FeatureHandler
}> = ({ children }) => {
  return (
    <div className="container-fluid h-100 feature">
      <div className="row w-100">{children}</div>
    </div>
  );
};

export default FeatureContainer;
