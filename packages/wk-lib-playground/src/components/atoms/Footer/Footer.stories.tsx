import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Footer } from '.';
import {Container} from '../Container';

export default {
  title: 'Components/Atoms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = () => {
  return (
    <Container>
      <Footer />
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
