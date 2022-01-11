import React, { forwardRef } from 'react';
import { FieldProps } from 'formik';
import TextArea from './TextArea';
import './TextArea.scss';

type TextAreaFormikProps = {
  id?: string;
  placeholder: string;
  className?: string;
  label: string;
  disabled?: boolean;
} & FieldProps

const TextAreaFormik = forwardRef<HTMLTextAreaElement, TextAreaFormikProps>(
  (
    {
      id,
      placeholder,
      label,
      disabled,
      className = '',
      field,
      form: { errors, touched, isSubmitting },
    },
    ref
  ) => {
    return (
      <TextArea
        name={field.name}
        className={className}
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
TextAreaFormik.displayName = 'TextAreaFormik';

export default TextAreaFormik;
