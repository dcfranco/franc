import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React from 'react';
import withFormik from 'storybook-formik';
import { Input, InputFormik } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onChange: { action: true },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <Container>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <Input {...args} />

        <br />
        <span className="d-block text-white">With Formik</span>
        <Field component={InputFormik} {...args} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal input: ',
  name: 'defaultInput',
  placeholder: 'Normal Input Placeholder',
  type: 'text',
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid input: ',
  name: 'invalidInput',
  placeholder: 'Invalid Input Placeholder',
  type: 'text',
  invalid: true,
  error: 'Invalid',
};
Invalid.parameters = {
  formik: {
    initialErrors: {
      invalidInput: 'Invalid',
    },
    initialTouched: {
      invalidInput: true,
    },
    isSubmitting: true,
  },
};

export { Normal, Invalid };
