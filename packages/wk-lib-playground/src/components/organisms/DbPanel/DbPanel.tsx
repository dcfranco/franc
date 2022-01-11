import { DbPanelWithRelations } from '../../../interfaces/db-panel-with-relations';
import React, { FC, useState } from 'react';
import { Grid, DetailForm } from '../../molecules';
import { Button } from '../../atoms';
import { DetailFormStateEnum } from '../../molecules/DetailForm/DetailForm';
import './DbPanel.scss';

type Props = {
  metadata: DbPanelWithRelations;
  records: any[];
};

enum ViewEngineDbPanelStateEnum {
  GRID = 'GRID',
  EDIT = 'EDIT',
  NEW = 'NEW',
}

const DbPanel: FC<Props> = ({ metadata, records }) => {
  const [state, changeState] = useState<
    ViewEngineDbPanelStateEnum | DetailFormStateEnum
  >(ViewEngineDbPanelStateEnum.GRID);
  const [selectedRecord, selectRecord] = useState<any>();
  const { table, view } = metadata;
  return (
    <div className="db-panel">
      <h3 className="title unselectable">{view.description}</h3>
      {state === ViewEngineDbPanelStateEnum.GRID ? (
        <>
          <div className="buttons buttons--top">
            <Button
              onClick={() => changeState(ViewEngineDbPanelStateEnum.GRID)}
              type="link"
              size="md"
              disabled={!selectedRecord}
              className="text-danger"
            >
              Delete
            </Button>
            <Button
              type="link"
              disabled={!selectedRecord}
              onClick={() => changeState(DetailFormStateEnum.EDIT)}
              size="sm"
            >
              Edit
            </Button>
            <Button
              type="link"
              disabled={selectedRecord}
              onClick={() => changeState(DetailFormStateEnum.NEW)}
              size="sm"
            >
              New
            </Button>
          </div>
          <Grid
            records={records}
            view={view}
            table={table}
            onSelect={(rec) =>
              selectedRecord &&
              selectedRecord[table.pkField] === rec[table.pkField]
                ? selectRecord(null)
                : selectRecord(rec)
            }
            selectedRecord={selectedRecord}
            onDblClick={() => changeState(DetailFormStateEnum.EDIT)}
          />
        </>
      ) : (
        <>
          <DetailForm
            attributes={view.attributes}
            record={selectedRecord}
            state={state as DetailFormStateEnum}
            pkFieldName={table.pkField}
          />
          <div className="buttons">
          <Button
              onClick={() => changeState(ViewEngineDbPanelStateEnum.GRID)}
              type="link"
              size="md"
              className="text-danger mx-0"
            >
              Delete
            </Button>
            <Button
              onClick={() => changeState(ViewEngineDbPanelStateEnum.GRID)}
              type="link"
              size="md"
            >
              Back
            </Button>
            <Button
              type="primary"
              size="md"
              onClick={() => changeState(ViewEngineDbPanelStateEnum.GRID)}
            >
              Save
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

DbPanel.displayName = 'DbPanel';

export default DbPanel;
