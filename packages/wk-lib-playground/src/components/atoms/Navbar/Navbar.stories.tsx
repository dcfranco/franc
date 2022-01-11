import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Feature } from '../../../interfaces/feature';
import React from 'react';
import { Navbar } from '.';
import {Container} from '../Container';

const features: Feature[] = [
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
  }
];

export default {
  title: 'Components/Atoms/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = () => {
  return (
    <Container>
      <Navbar features={features} />
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
