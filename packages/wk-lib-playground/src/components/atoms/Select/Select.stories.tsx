import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React from 'react';
import withFormik from 'storybook-formik';
import { Select, SelectFormik } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/Select',
  component: Select,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onChange: { action: true },
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Container overflowVisible={true}>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <Select {...args} />

        <br />

        <span className="d-block text-white">With Formik</span>
        <Field component={SelectFormik} {...args} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal Select',
  name: 'defaultSelect',
  placeholder: 'Normal Select Placeholder',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid Select',
  name: 'invalidSelect',
  placeholder: 'Invalid Select Placeholder',
  invalid: true,
  error: 'Invalid',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]
};
Invalid.parameters = {
  formik: {
    initialErrors: {
      invalidSelect: 'Invalid',
    },
    initialTouched: {
      invalidSelect: true,
    },
    isSubmitting: true,
  },
};

export { Normal, Invalid };
