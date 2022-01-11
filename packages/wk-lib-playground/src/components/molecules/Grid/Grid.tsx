import { ViewAttributeWithRelations } from '../../../interfaces/view-attribute-with-relations';
import React, { FC } from 'react';
import './Grid.scss';
import {
  Table,
  TableHead,
  TableColumn,
  TableBody,
  TableRecord,
} from '../../atoms';

type Props = {
  attributes: ViewAttributeWithRelations[];
  records: any[];
};

const Grid: FC<Props> = ({ attributes, records }) => {
  return (
    <Table>
      <TableHead>
        {attributes.map((field) => {
          return <TableColumn name={field.name}>{field.label}</TableColumn>;
        })}
      </TableHead>
      <TableBody>
        {records.map((rec) => (
          <TableRecord key={rec.id} record={rec} columns={attributes} />
        ))}
      </TableBody>
    </Table>
  );
};

Grid.displayName = 'Grid';

export default Grid;
