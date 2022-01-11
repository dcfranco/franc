import { ViewWithRelations } from '../../../interfaces/view-with-relations';
import React, { FC } from 'react';
import './Grid.scss';
import {
  Table,
  TableHead,
  TableColumn,
  TableBody,
  TableRecord,
} from '../../atoms';
import { TableWithRelations } from '../../../interfaces/table-with-relations';

type Props = {
  view: ViewWithRelations;
  table: TableWithRelations;
  records: any[];
  selectedRecord?: any;
  onSelect?: (record: any) => void;
  onDblClick?: (record: any) => void;
};

const Grid: FC<Props> = ({
  view,
  table,
  records,
  selectedRecord,
  onSelect,
  onDblClick
}) => {
  return (
    <Table>
      <TableHead>
        {view.attributes.map((field) => {
          return <TableColumn name={field.name}>{field.label}</TableColumn>;
        })}
      </TableHead>
      <TableBody>
        {records.map((rec) => (
          <TableRecord
            onClick={onSelect}
            onDblClick={(record) => {
              onSelect(record)
              setTimeout(() => onDblClick(record))
            }}
            key={rec.id}
            isSelected={
              selectedRecord &&
              selectedRecord[table.pkField] === rec[table.pkField]
            }
            record={rec}
            columns={view.attributes}
          />
        ))}
      </TableBody>
    </Table>
  );
};

Grid.displayName = 'Grid';

export default Grid;
