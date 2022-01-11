import { FieldProps } from 'formik';
import React, { forwardRef } from 'react';
import Checkbox from './Checkbox';
import './Checkbox.scss';

type CheckboxFormikProps = {
  id?: string;
  className?: string;
  label: string;
  disabled?: boolean;
} & FieldProps

const CheckboxFormik = forwardRef<HTMLInputElement, CheckboxFormikProps>(
  (
    {
      id,
      label,
      disabled,
      className = '',
      field,
      form: { setFieldValue, errors, touched, isSubmitting },
    },
    ref
  ) => {
    const isChecked = (field.value === true || field.value === 'true');
    return (
       <Checkbox
        name={field.name}
        label={label}
        className={className}
        invalid={!!(errors[field.name] && touched[field.name] || isSubmitting)}
        disabled={disabled}
        checked={isChecked}
        ref={ref}
        id={id ?? field.name}
        onClick={() => setFieldValue(field.name, !isChecked)}
        onBlur={field.onBlur}
      />
    );
  }
);
CheckboxFormik.displayName = 'CheckboxFormik';

export default CheckboxFormik;
