/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewAttributePartialWithRelations } from '../../../interfaces/view-attribute-partial-with-relations';
import React, { FC } from 'react';
import './Table.scss';
import classNames from 'classnames';
import { ViewAttributeComponentEnum } from '../../../interfaces/view-attribute-with-relations';

type Props = {
  className?: string;
  columns: ViewAttributePartialWithRelations[];
  record: {};
  isSelected: boolean;
  onClick?: (record: {}) => void;
  onDblClick?: (record: {}) => void;
};

const TableRecord: FC<Props> = (props) => {
  const { className, record, columns, isSelected, onClick, onDblClick } = props;
  return (
    <tr
      tabIndex={0}
      className={classNames('table-line', className, {
        selected: isSelected,
      })}
      onDoubleClick={() => onDblClick && onDblClick(record)}
      onClick={() => onClick && onClick(record)}
    >
      {columns.map((col, i) => {
        const key = col.name;
        const value = [ViewAttributeComponentEnum.COMBO].includes(col.component)
          ? col.options.filter((op) => op.value === record[key])[0]
          : record[key];
        return (
          <td
            data-id={`${key}_${i}`}
            key={`${key}_${i}`}
            className="table-line-col"
          >
            {typeof value === 'object' ? value.label : value}
          </td>
        );
      })}
    </tr>
  );
};

TableRecord.displayName = 'TableRecord';

export default TableRecord;
