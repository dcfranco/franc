import React, { FC, ReactNode } from 'react';
import './Table.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const TableHead: FC<Props> = ({ className, children }) => {
  return (
    <thead className='table-header'>
      <tr className={`${className}`}>{children}</tr>
    </thead>
  );
};

TableHead.displayName = 'TableHead';

export default TableHead;
