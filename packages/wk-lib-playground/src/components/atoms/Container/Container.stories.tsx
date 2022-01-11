import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import { Container, Message as Msg } from '.';

export default {
  title: 'Components/Atoms/Container',
  component: Container,
  argTypes: {
    children: {
      name: 'Message',
      type: 'string',
    },
  },
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => {
  return (
    <Container>
      {args.children && (
        <Msg>
          <span>{args.children}</span>
        </Msg>
      )}
    </Container>
  );
};

const Clean = Template.bind({});

const Message = Template.bind({});
Message.args = {
  children: 'Message to show',
};


export { Clean, Message };
