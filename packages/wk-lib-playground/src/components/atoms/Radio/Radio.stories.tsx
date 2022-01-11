import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from 'formik';
import React, { useState } from 'react';
import withFormik from 'storybook-formik';
import { Radio, RadioFormik } from '.';
import {Container} from '../Container';
import { Option } from '../Select/Select';

export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
  decorators: [withFormik],
  argTypes: {
    onBlur: { action: true },
    onClick: { action: true },
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => {
  const [selected, toggleSelected] = useState<any>()
  return (
    <Container>
      <div className="form mx-auto mt-5">
        <span className="d-block text-white">Without Formik</span>
        <Radio {...args} value={selected} onClick={(op) => toggleSelected(op.value)} />

        <br />
        <span className="d-block text-white">With Formik</span>
        <Field component={RadioFormik} {...args} />
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  label: 'Normal Radio',
  name: 'defaultRadio',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]
};

const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid Radio',
  name: 'invalidRadio',
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
      invalidRadio: 'Invalid',
    },
    initialTouched: {
      invalidRadio: true,
    },
    isSubmitting: true,
  },
};

export { Normal, Invalid };
