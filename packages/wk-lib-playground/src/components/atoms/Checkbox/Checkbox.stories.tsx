import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React from 'react';
import withFormik from 'storybook-formik';
import { Checkbox, CheckboxFormik } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onClick: { action: true },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Container>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <Checkbox {...args} />

        <br />
        <span className="d-block text-white">With Formik</span>
        <Field component={CheckboxFormik} {...args} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal Checkbox',
  name: 'defaultInput',
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid Checkbox',
  name: 'invalidInput',
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
