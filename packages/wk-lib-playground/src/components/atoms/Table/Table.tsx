import React, { FC, ReactNode } from 'react';
import './Table.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const Table: FC<Props> = ({ className, children }) => {
  return (
    <div className="table-container">
      <table className={`table_custom ${className}`}>{children}</table>
    </div>
  );
};

Table.displayName = 'Table';

export default Table;
