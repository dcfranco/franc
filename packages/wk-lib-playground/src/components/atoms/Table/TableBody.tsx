/* eslint-disable react/no-find-dom-node */
import React, { FC, ReactNode } from 'react';
import './Table.scss';

type Props = {
  className?: string;
  children: ReactNode;
};
const TableBody: FC<Props> = ({ className, children }) => {
  return <tbody className={`table-body ${className}`}>{children}</tbody>;
};

TableBody.displayName = 'TableBody';

export default TableBody;
