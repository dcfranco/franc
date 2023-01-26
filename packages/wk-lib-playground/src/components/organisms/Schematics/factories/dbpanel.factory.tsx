import React, { FC, useEffect, useState } from 'react';
import { FilterBuilder } from '../../../../builders/Filter';
import {
  SchematicObjectTypeEnum,
  SchematicObjectWithRelations,
} from '../../../../interfaces/schematic-object-with-relations';
import { DbPanel, DbPanelApi, DbPanelEvents } from '../../DbPanel';
import { PanelEvents } from '../../../atoms/Panel';
import { SchematicsTree } from '../SchematicsTree';
import { DbPanelWithRelations } from 'interfaces/db-panel-with-relations';

const { useGetMetadataQuery, useGetRecordsQuery } = DbPanelApi;
const filterRecords = (
  parent: SchematicsTree<any, any, DbPanelWithRelations>,
  selectedParentRecord?: any
) => {
  const builder = new FilterBuilder<SchematicObjectWithRelations>({});
  if (
    parent.value.type === SchematicObjectTypeEnum.DBPANEL &&
    selectedParentRecord
  ) {
    return builder
      .where({
        [`${parent.metadata.name.toLocaleLowerCase()}Id`]:
          selectedParentRecord[parent.metadata.table.pkField],
      })
      .build();
  }
  return builder.build();
};

const filter = new FilterBuilder<SchematicObjectWithRelations>({
  include: [
    {
      relation: 'childs',
    },
  ],
}).build();

type Props = {
  schematic: SchematicsTree<DbPanelEvents, any>;
  test?: any;
};

const DbPanelFactory: FC<Props> = ({ schematic: schematics, test }) => {
  const { handler, value: schematic, parent } = schematics;
  const [selectedParentRecord, toggleParentRecord] = useState(test);
  const { data: metadata, isLoading: isLodingMetadata } = useGetMetadataQuery({
    id: schematic.handlerId,
    filter,
  });
  const { data: records, isLoading: isLodingRecords } = useGetRecordsQuery({
    id: schematic.handlerId,
    filter: filterRecords(parent, selectedParentRecord),
  });
  const isLoading = isLodingMetadata || isLodingRecords;
  useEffect(() => {
    schematics.metadata = metadata;
    if (schematics.parent.value.type === SchematicObjectTypeEnum.DBPANEL) {
      schematics.parent.handler.addEventListener(
        DbPanelEvents.onSelectRecord,
        (inx) => {
          toggleParentRecord(inx);
        }
      );
    }
    schematics.handler.addEventListener(DbPanelEvents.onDblClick, (inx) => {
      if (Array.isArray(schematic.childs) && schematic.childs.length > 0) {
        const panelSchematics = schematics.find(
          (value, node) =>
            value.type === SchematicObjectTypeEnum.PANEL &&
            node.handler.getListenersLength() > 0
        ) as unknown as SchematicsTree<PanelEvents, any>;
        if (panelSchematics) {
          panelSchematics.handler.trigger(PanelEvents.onOpenChild, {
            record: inx,
            schematic: schematic.childs[0],
            parent: schematics,
          });
        }
      }
    });
  }, [metadata]);
  if (isLoading) {
    return <div>Loading..</div>;
  }
  return <DbPanel metadata={metadata} records={records} handler={handler} />;
};

DbPanelFactory.displayName = 'DbPanelFactory';

export default DbPanelFactory;
