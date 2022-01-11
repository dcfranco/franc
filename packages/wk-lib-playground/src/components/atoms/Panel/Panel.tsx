import type { NextPage } from 'next';
import React from 'react';
import './Panel.scss';

const Panel: NextPage<{
  children: React.ReactNode;
  size?: number;
}> = ({ children, size = 12 }) => {
  return (
      <div className={`col-sm-${size}`}>
        <div className='panel__container'>
        {children}
        </div>
    </div>
  );
};

export default Panel;
