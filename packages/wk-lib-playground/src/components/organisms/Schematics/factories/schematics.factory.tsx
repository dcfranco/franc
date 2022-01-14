import { SchematicObjectWithRelations, SchematicObjectTypeEnum } from '../../../../interfaces/schematic-object-with-relations';
import React, { FC, useMemo } from 'react';
import { FilterBuilder } from '../../../../builders/Filter';
import { DbPanelFactory, PanelFactory, FeatureFactory } from '.';
import { useGetQuery } from '../Schematics.api';
import { SchematicsTree } from '../SchematicsTree';
import Schematics from '../Schematics';

const filter = new FilterBuilder<SchematicObjectWithRelations>({
  include: [{
    relation: 'childs',
    scope: {
      limit: 1
    }
  }]
}).build();

type Props = {
  id: number,
  schematic?: SchematicsTree<any, any>
};

const SchematicFactory: FC<Props> = ({ id, schematic }) => {
  const { data, isLoading } = useGetQuery({ id: id, filter })
  const schematics = useMemo<SchematicsTree<any, any>>(() => {
    if (!schematic) {
      return new SchematicsTree({
        ...data,
        level: 0
      })
    } else if (data && data.id === id && schematic.value.id !== id && !isLoading) {
      return schematic.appendChild(new SchematicsTree<any, any>({...data, level: schematic.value.level + 1}))
    }
  }, [data])
  if (isLoading || !data) {
    return null;
  }

  switch (schematics.value.type) {
    case SchematicObjectTypeEnum.DBPANEL:
    {
      debugger

      if (schematic.value.type === SchematicObjectTypeEnum.DBPANEL)
        return <Schematics id={schematic.value.childs[0].id} schematic={schematic} />
      return <DbPanelFactory schematic={schematics} />
    }
    case SchematicObjectTypeEnum.PANEL: {
      debugger
      return <PanelFactory schematic={schematics} />
    }
    case SchematicObjectTypeEnum.FUNCTION:
      return <FeatureFactory schematic={schematics} />
    default:
      return null;
  }
};

SchematicFactory.displayName = 'SchematicFactory';

export default SchematicFactory;
