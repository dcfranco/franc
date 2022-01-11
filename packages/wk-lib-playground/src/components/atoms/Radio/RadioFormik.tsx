import { FieldProps } from 'formik';
import React, { forwardRef } from 'react';
import { Option } from '../Select/Select';
import Radio from './Radio';
import './Radio.scss';

type RadioFormikProps = {
  id?: string;
  className?: string;
  label: string;
  disabled?: boolean;
  options: Option[];
} & FieldProps

const RadioFormik = forwardRef<HTMLInputElement, RadioFormikProps>(
  (
    {
      id,
      label,
      disabled,
      options,
      className = '',
      field,
      form: { setFieldValue, errors, touched, isSubmitting },
    },
    ref
  ) => {
    return (
       <Radio
        name={field.name}
        label={label}
        className={className}
        invalid={!!(errors[field.name] && touched[field.name] || isSubmitting)}
        disabled={disabled}
        options={options}
        ref={ref}
        id={id ?? field.name}
        value={field.value}
        onClick={(option) => setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
      />
    );
  }
);
RadioFormik.displayName = 'RadioFormik';

export default RadioFormik;
