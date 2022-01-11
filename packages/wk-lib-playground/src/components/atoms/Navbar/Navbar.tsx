import { Feature } from '../../../interfaces/feature';
import type { NextPage } from 'next';
import React from 'react';
import classNames from 'classnames';
import './Navbar.scss';

const Navbar: NextPage<{
  features: Feature[];
}> = ({ features }) => {
  return (
    <div className="navbar">
      <div className="spotlight">
        <i className="material-icons">menu</i>
      </div>
      {features.map((feature) => {
        return (
          <div
            className={classNames('feature-name', {
              selected: feature.selected,
            })}
          >
            {feature.name}
            {feature.selected && (
              <i className="material-icons">highlight_off</i>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
