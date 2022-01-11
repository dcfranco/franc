import React, { FC } from 'react';
import Select, { Option } from './Select';
import { FieldProps } from 'formik';
import './Select.scss';

type Props = {
  id?: string;
  className?: string;
  label?: string;
  options: Option[];
  disabled?: boolean;
  placeholder: string;
  loading?: boolean;
  submitOnChange?: boolean;
  ariaLabelledBy?: string;
} & FieldProps;

export const SelectFormik: FC<Props> = ({
  className,
  id,
  disabled,
  options,
  label,
  field,
  placeholder,
  form,
}) => {
  const { errors, touched, setFieldValue } = form;
  return (
    <Select
      id={id}
      invalid={!!(errors[field.name] && touched[field.name])}
      error={errors[field.name] as string}
      className={className}
      options={options}
      label={label}
      onBlur={field.onBlur}
      placeholder={placeholder}
      onChange={(e) => {
        setFieldValue(field.name, e);
      }}
      disabled={disabled}
      name={field.name}
      value={field.value || ''}
    />
  );
};

export default SelectFormik;
