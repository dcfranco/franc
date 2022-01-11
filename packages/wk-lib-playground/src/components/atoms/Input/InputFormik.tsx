import React, { forwardRef } from 'react';
import { FieldProps } from 'formik';
import Input from './Input';
import './Input.scss';

type InputFormikProps = {
  id?: string;
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
  type?: string;
} & FieldProps

const InputFormik = forwardRef<HTMLInputElement, InputFormikProps>(
  (
    {
      id,
      placeholder,
      label,
      disabled,
      type,
      className = '',
      field,
      form: { errors, touched, isSubmitting },
    },
    ref
  ) => {
    return (
      <Input
        name={field.name}
        className={className}
        type={type}
        invalid={!!(errors[field.name] && touched[field.name] || isSubmitting)}
        error={errors[field.name] as string}
        label={label}
        onBlur={field.onBlur}
        onChange={field.onChange}
        placeholder={placeholder}
        value={field.value}
        ref={ref}
        disabled={disabled}
        id={id ?? field.name}
      />
    );
  }
);
InputFormik.displayName = 'InputFormik';

export default InputFormik;
