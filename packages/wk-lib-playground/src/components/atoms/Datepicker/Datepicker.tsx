import React from 'react';
import DatePicker from 'react-datepicker';
import './Datepicker.scss';
import "react-datepicker/dist/react-datepicker.css";

export type DatepickerProps = {
  name: string;
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
  type?: string;
  error?: string;
  invalid?: boolean;
  value?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

const Datepicker = ({
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
}: DatepickerProps) => {
  return (
    <>
      <div className={`input datepicker ${className}`}>
        {label && (
          <label className="input__label" htmlFor={name}>
            {label}:
          </label>
        )}
        <div className="input__wrapper">
          <DatePicker
            selected={value}
            disabled={disabled}
            onBlur={onBlur}
            placeholderText={placeholder}
            onChange={(date) => {
              onChange(date)
            }}

          />
          {invalid && <div className="input__error">{error}</div>}
        </div>
      </div>
    </>
  );
};
Datepicker.displayName = 'Datepicker';

export default Datepicker;
