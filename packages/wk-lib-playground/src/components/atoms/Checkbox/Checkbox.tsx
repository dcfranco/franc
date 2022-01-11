import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './Checkbox.scss';

type CheckboxProps = {
  id?: string;
  name: string;
  className?: string;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      disabled,
      name,
      invalid,
      className = '',
      checked,
      onClick,
      onBlur,
    },
    ref
  ) => {
    return (
      <label className={classNames('checkbox-container', {
        invalid,
      })}>{ label }
       <input
        type='checkbox'
        name={name}
        className={className}
        disabled={disabled}
        checked={checked}
        ref={ref}
        id={id ?? name}
        onClick={onClick}
        onBlur={onBlur}
        aria-label={label}
      />
      <span className='checkmark' />
    </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
