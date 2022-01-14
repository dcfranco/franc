import { PanelSizeEnum } from '../../../interfaces/panel-with-relations';
import SchematicsHandler from '../../organisms/Schematics/SchematicsHandler';
import type { NextPage } from 'next';
import React from 'react';
import './Panel.scss';


export enum PanelEvents {
  onOpenChild,
}

export type PanelHandler = SchematicsHandler<PanelEvents, any>;

const sizes = {
  FULL: 12,
  TWO: 6,
  THREE: 4,
};

const Panel: NextPage<{
  children: React.ReactNode;
  size?: PanelSizeEnum;
}> = ({ children, size = sizes[PanelSizeEnum.FULL] }) => {
  return (
      <div className={`col-sm-${sizes[size]}`}>
        <div className='panel__container'>
        {children}
        </div>
    </div>
  );
};

export default Panel;
