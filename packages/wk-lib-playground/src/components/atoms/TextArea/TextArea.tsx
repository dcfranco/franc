import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './TextArea.scss';

export type TextAreaProps = {
  id?: string;
  name: string;
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
  error?: string;
  invalid?: boolean;
  value?: any;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      placeholder,
      label,
      disabled,
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
        <div className={`textarea ${className}`}>
          {label && (
            <label className="textarea__label" htmlFor={name}>
              {label}:
            </label>
          )}
          <div className="textarea__wrapper">
            <textarea
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
            {invalid && <div className="textarea__error">{error}</div>}
          </div>
        </div>
      </>
    );
  }
);
TextArea.displayName = 'TextArea';

export default TextArea;
