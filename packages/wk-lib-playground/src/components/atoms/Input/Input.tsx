import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Input.scss';

export type InputProps = {
  id?: string;
  name: string;
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
  type?: string;
  error?: string;
  invalid?: boolean;
  value?: any;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      placeholder,
      label,
      disabled,
      type,
      name,
      invalid,
      className = '',
      value,
      onChange,
      onBlur,
      error,
    },
    ref
  ) => {
    return (
      <>
        <div className={`input ${className}`}>
          {label && (
            <label className="input__label" htmlFor={name}>
              {label}:
            </label>
          )}
          <div className="input__wrapper">
            <input
              type={type ?? 'text'}
              name={name}
              className={classNames(
                'form-control form-control-sm d-block',
                className,
                {
                  invalid,
                }
              )}
              disabled={disabled}
              value={value}
              ref={ref}
              id={id ?? name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              aria-label={placeholder}
            />
            {invalid && <div className="input__error">{error}</div>}
          </div>
        </div>
      </>
    );
  }
);
Input.displayName = 'Input';

export default Input;
