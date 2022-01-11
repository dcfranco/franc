import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Panel from './Panel';
import { Feature } from '../';
import { Container } from '../Container';
import { Navbar } from '../Navbar';

export default {
  title: 'Components/Atoms/Panel',
  component: Panel,
} as ComponentMeta<typeof Feature>;

const features = [
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
    selected: true
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
];
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Feature> = () => {
  return (
    <Container>
      <Navbar features={features} />
      <Feature>
        <Panel size={6}>
            <div>The content will be rendered here</div>
        </Panel>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
