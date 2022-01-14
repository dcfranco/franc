import React, { FC, useEffect } from 'react';
import { FilterBuilder } from '../../../../builders/Filter';
import { SchematicObjectWithRelations } from '../../../../interfaces/schematic-object-with-relations';
import {DbPanel, DbPanelApi, DbPanelEvents } from '../../DbPanel';
import { PanelEvents } from '../../../atoms/Panel';
import { SchematicsTree } from '../SchematicsTree';

const { useGetMetadataQuery, useGetRecordsQuery } = DbPanelApi
const filter = new FilterBuilder<SchematicObjectWithRelations>({
  include: [{
    relation: 'childs'
  }]
}).build();

type Props = {
  schematic: SchematicsTree<DbPanelEvents, any>;
};

const DbPanelFactory: FC<Props> = ({ schematic: schematics }) => {
  const { handler, value: schematic } = schematics;
  const { data: metadata, isLoading: isLodingMetadata } = useGetMetadataQuery({ id: schematic.handlerId, filter})
  const { data: records, isLoading: isLodingRecords } = useGetRecordsQuery({ id: schematic.handlerId })
  const isLoading = isLodingMetadata || isLodingRecords;
  useEffect(() => {
    schematics.handler.addEventListener(DbPanelEvents.onSelectRecord, (inx) => {
      (schematics.parent as unknown as SchematicsTree<PanelEvents, any>).handler.trigger(PanelEvents.onOpenChild, inx)
    })
  }, [])
  if (isLoading) {
    return (
      <div>Loading..</div>
    )
  }
  return (
    <DbPanel metadata={metadata} records={records} handler={handler} />
  );
};

DbPanelFactory.displayName = 'DbPanelFactory';

export default DbPanelFactory;
