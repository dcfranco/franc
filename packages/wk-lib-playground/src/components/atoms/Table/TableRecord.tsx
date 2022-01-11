/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewAttributePartialWithRelations } from '../../../interfaces/view-attribute-partial-with-relations';
import React, { FC } from 'react';
import './Table.scss';

type Props = {
  className?: string;
  columns: ViewAttributePartialWithRelations[];
  record: {};
};

const TableRecord: FC<Props> = (props) => {
  const { className, record, columns } = props;
  return (
    <tr tabIndex={0} className={`table-line ${className}`} onClick={() => {}}>
      {columns.map((col, i) => {
        const key = col.name;
        return (
          <td data-id={`${key}_${i}`} key={`${key}_${i}`} className='table-line-col'>
            { record[key] }
          </td>
        );
      })}
    </tr>
  );
};

TableRecord.displayName = 'TableRecord';

export default TableRecord;
