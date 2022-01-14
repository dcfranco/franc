import React, { FC } from 'react';
import { SchematicsFactory } from './factories';
import { SchematicsTree } from './SchematicsTree';
import './Schematics.scss';

type Props = {
  id: number;
  schematic?: SchematicsTree<any, any>
};

const Schematics: FC<Props> = ({ id, schematic }) => {
  return (
    <SchematicsFactory id={id} schematic={schematic} />
  )
};

Schematics.displayName = 'Schematics';

export default Schematics;
