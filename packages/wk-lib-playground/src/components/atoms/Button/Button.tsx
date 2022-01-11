import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Button.scss';

export type ButtonProps = {
  id?: string;
  name?: string;
  className?: string;
  children: string | React.ReactNode;
  disabled?: boolean;
  action?: 'submit' | 'reset' | 'button' | undefined;
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'low-dark' | 'link' | 'gray' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
};

const Button = ({
  id,
  disabled,
  action = 'button',
  name,
  className,
  type = 'primary',
  onClick,
  onFocus,
  children,
  size = 'lg',
}: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      onFocus={onFocus}
      disabled={disabled}
      type={action}
      name={name}
      className={classNames('btn', {
        [`btn-${type}`]: typeof type === 'string',
        [`btn-${size}`]: typeof size === 'string',
      }, className)}
    >
      {children}
    </button>
  );
};
Button.displayName = 'Button';

export default Button;
