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
  const [openedChils, setOpenChilds] = useState<Array<number>>([schematic.value.childs[0].id])

  const onOpenChild =  useCallback((inx) => {
    setOpenChilds([].concat(openedChils, schematic.next.value.childs[0].id))
  }, [openedChils]);

  useEffect(() => {
    schematic.handler.addEventListener(PanelEvents.onOpenChild, onOpenChild)
  }, [metadata])

  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <>
      {openedChils.map((inx) => (
        <Panel size={openedChils.length > 1 ? PanelSizeEnum.TWO : metadata.size}>
          <Schematics id={inx} schematic={schematic} />
        </Panel>
      ))}
    </>
  );
};

PanelFactory.displayName = 'PanelFactory';

export default PanelFactory;
