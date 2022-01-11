import React from 'react';
import './Globals.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const LayoutRaw = ({ className, children }: IProps) => {
  return <div className={className}>{children}</div>;
};
