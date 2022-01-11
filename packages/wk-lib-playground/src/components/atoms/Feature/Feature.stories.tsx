import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Feature } from '.';
import { Container } from '../Container';
import { Navbar } from '../Navbar';

const features = [
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
    selected: true,
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
];

export default {
  title: 'Components/Atoms/Feature',
  component: Feature,
} as ComponentMeta<typeof Feature>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Feature> = () => {
  return (
    <Container>
      <Navbar features={features} />
      <Feature>
        <div>The feature will be rendered here</div>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
