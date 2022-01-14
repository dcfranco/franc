import { SchematicObjectWithRelations } from '../../../interfaces/schematic-object-with-relations';
import React, { FC, createContext, useMemo, ReactNode } from 'react';
import './Schematics.scss';
import { SchematicsTree } from './SchematicsTree';

export type SchematicsContextType = {
  schematics: SchematicsTree<any>
}

export const SchematicsContext = createContext<SchematicsContextType>({
  schematics: null,
})

type Props = {
  root: SchematicObjectWithRelations;
  children: ReactNode;
};

const SchematicsProvider: FC<Props> = ({ root, children }) => {
  const schematics = useMemo(() => new SchematicsTree({ ...root, level: 0 }), [root])
  return (
    <SchematicsContext.Provider value={{ schematics }}>
      {children}
    </SchematicsContext.Provider>
  )
};

SchematicsProvider.displayName = 'SchematicsProvider';

export default SchematicsProvider;
