import React, { FC, ReactNode } from 'react';
import './Table.scss';

type Props = {
  className?: string;
  name: string;
  children: ReactNode;
};

const TableColumn: FC<Props> = ({ className, children, name }) => {
  return (
    <th id={`th-${name}`} scope="col" className={`header-item ${className}`}>
      {children}
    </th>
  );
};

TableColumn.displayName = 'TableColumn';

export default TableColumn;
