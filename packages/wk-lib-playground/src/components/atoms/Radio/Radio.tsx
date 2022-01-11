import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { Option } from '../Select/Select';
import './Radio.scss';

type RadioProps = {
  id?: string;
  name: string;
  className?: string;
  label: string;
  options: Option[];
  disabled?: boolean;
  invalid?: boolean;
  value: any;
  onClick: (option: Option) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      label,
      disabled,
      options,
      name,
      invalid,
      className = '',
      value,
      onClick,
      onBlur,
    },
    ref
  ) => {
    return (
      <>
        <span className="d-block radio-label">{label}:</span>
        {options.map((option) => {
          return (
            <>
              <label
                className={classNames('radio-container', {
                  invalid,
                })}
              >
                {option.label}
                <input
                  type="radio"
                  name={name}
                  className={className}
                  disabled={disabled}
                  checked={option.value === value}
                  value={option.value}
                  ref={ref}
                  id={id ?? name}
                  onClick={() => onClick(option)}
                  onBlur={onBlur}
                  aria-label={option.label}
                />
                <span className="radio-checkmark" />
              </label>
            </>
          );
        })}
      </>
    );
  }
);
Radio.displayName = 'Radio';

export default Radio;
