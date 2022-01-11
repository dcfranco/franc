import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React from 'react';
import withFormik from 'storybook-formik';
import { Datepicker, DatepickerFormik } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/Datepicker',
  component: Datepicker,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onChange: { action: true },
  },
} as ComponentMeta<typeof Datepicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Datepicker> = (args) => {
  return (
    <Container overflowVisible={true}>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <Datepicker {...args} />

        <br />
        <span className="d-block text-white">With Formik</span>
        <Field component={DatepickerFormik} {...args} name={`${args.name}_2`} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal input: ',
  name: 'defaultDatepicker',
  placeholder: 'Normal Datepicker Placeholder',
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid input: ',
  name: 'invalidDatepicker',
  placeholder: 'Invalid Datepicker Placeholder',
  invalid: true,
  error: 'Invalid',
};
Invalid.parameters = {
  formik: {
    initialErrors: {
      invalidDatepicker: 'Invalid',
    },
    initialTouched: {
      invalidDatepicker: true,
    },
    isSubmitting: true,
  },
};

export { Normal, Invalid };
