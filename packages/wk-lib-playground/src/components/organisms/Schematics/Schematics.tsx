import React, { FC } from 'react';
import { SchematicsFactory } from './factories';
import { SchematicsTree } from './SchematicsTree';
import './Schematics.scss';

type Props = {
  id: number;
  test?: any;
  schematic?: SchematicsTree<any, any>
};

const Schematics: FC<Props> = ({ id, schematic, test }) => {
  return (
    <SchematicsFactory id={id} schematic={schematic} test={test} />
  )
};

Schematics.displayName = 'Schematics';

export default Schematics;
