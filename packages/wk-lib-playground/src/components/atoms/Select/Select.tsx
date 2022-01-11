import React, { FC } from 'react'
import ReactSelect from 'react-select'
import classNames from 'classnames'
import "./Select.scss";

export type Option = {
  value: string | number
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type Props = {
  id?: string
  className?: string
  label?: string
  name: string
  options: Option[]
  disabled?: boolean
  placeholder: string
  loading?: boolean
  error?: string;
  invalid?: boolean;
  value?: any;
  onChange: (e: unknown) => void
  onBlur: (e: unknown) => void
}

export const Select: FC<Props> = ({
  className,
  name,
  id,
  disabled,
  options,
  label,
  invalid,
  placeholder,
  value,
  error,
  loading,
  onChange,
  onBlur
}) => {
  return (
    <div className="combobox combobox__select">
      {label && (
        <label className="combobox__label" htmlFor={name}>
          {label}:
        </label>
      )}
      <ReactSelect
        className={classNames('combobox__select', className, {
          invalid,
        })}
        classNamePrefix="combobox__select"
        options={options}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        name={name}
        inputId={id ?? name}
        value={value}        
      />
      {invalid && (
        <div className="combobox__error">{error}</div>
      )}
      {loading && <span className="combobox__select__spinner"></span>}
    </div>
  )
}

export default Select
