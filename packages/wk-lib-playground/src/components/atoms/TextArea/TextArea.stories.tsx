import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React from 'react';
import withFormik from 'storybook-formik';
import { TextArea, TextAreaFormik } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onChange: { action: true },
  },
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => {
  return (
    <Container>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <TextArea {...args} />

        <br />
        <span className="d-block text-white">With Formik</span>
        <Field component={TextAreaFormik} {...args} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal TextArea: ',
  name: 'defaultTextArea',
  placeholder: 'Normal TextArea Placeholder',
  type: 'text',
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid TextArea: ',
  name: 'invalidTextArea',
  placeholder: 'Invalid TextArea Placeholder',
  type: 'text',
  invalid: true,
  error: 'Invalid',
};
Invalid.parameters = {
  formik: {
    initialErrors: {
      invalidTextArea: 'Invalid',
    },
    initialTouched: {
      invalidTextArea: true,
    },
    isSubmitting: true,
  },
};

export { Normal, Invalid };
