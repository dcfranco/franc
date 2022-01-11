import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { Container } from '../Container';
import { Panel } from '../Panel';
import { Feature } from '../Feature';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: true },
    onFocus: { action: true },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Container>
      <Feature>
        <Panel>
          <Button {...args}>Button</Button>
        </Panel>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  type: 'primary',
  size: 'lg',
};

export { Normal };
