import { PanelSizeEnum } from '../../../../interfaces/panel-with-relations';
import React, { FC, useEffect, useState, useCallback } from 'react';
import { Panel, PanelApi, PanelEvents } from '../../../atoms/Panel';
import Schematics from '../Schematics';
import { SchematicsTree } from '../SchematicsTree';

const { useGetQuery } = PanelApi;

type Props = {
  schematic: SchematicsTree<PanelEvents, number>;
};

const PanelFactory: FC<Props> = ({ schematic }) => {
  const { data: metadata, isLoading } = useGetQuery({
    id: schematic.value.handlerId,
  });
  const [openedChils, setOpenChilds] = useState<Array<{
    id: number;
    record?: any;
    parent: SchematicsTree<any, any>;
  }>>([{
    id: schematic.value.childs[0].id,
    parent: schematic,
  }])

  const onOpenChild =  useCallback((inx) => {
    if (inx.schematic.id) {
      setOpenChilds((state) => [].concat(state, {
        id: inx.schematic.id,
        record: inx.record,
        parent: inx.parent
      }))
    }
  }, [openedChils, schematic]);

  useEffect(() => {
    schematic.handler.addEventListener(PanelEvents.onOpenChild, onOpenChild)
  }, [metadata])

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      {openedChils.slice(-2).map((inx) => (
        <Panel key={inx.id} size={openedChils.length > 1 ? PanelSizeEnum.TWO : metadata.size}>
          <Schematics id={inx.id} schematic={inx.parent} test={inx.record} />
        </Panel>
      ))}
    </>
  );
};

PanelFactory.displayName = 'PanelFactory';

export default PanelFactory;
