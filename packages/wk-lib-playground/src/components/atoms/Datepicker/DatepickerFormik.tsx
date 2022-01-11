import React from 'react';
import { FieldProps } from 'formik';
import Datepicker from './Datepicker';
import './Datepicker.scss';

type DatepickerFormikProps = {
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
} & FieldProps;

const DatepickerFormik = ({
  placeholder,
  label,
  disabled,
  className = '',
  field,
  form: { setFieldValue, errors, touched, isSubmitting },
}: DatepickerFormikProps) => {
  return (
    <Datepicker
      name={field.name}
      className={className}
      invalid={!!((errors[field.name] && touched[field.name]) || isSubmitting)}
      error={errors[field.name] as string}
      label={label}
      onBlur={field.onBlur}
      onChange={(date: any) => setFieldValue(field.name, date)}
      placeholder={placeholder}
      value={field.value}
      disabled={disabled}
    />
  );
};
DatepickerFormik.displayName = 'DatepickerFormik';

export default DatepickerFormik;
