import { ComponentMeta, ComponentStory } from '@storybook/react';
import store from '../../../core/store';
import React from 'react';
import { Provider } from 'react-redux';
import { Schematics } from '.';
import { Container, Feature, Panel } from '../../atoms';

export default {
  title: 'Components/Organisms/Schematics',
  component: Schematics,
  argTypes: {
    id: {
      defaultValue: 0
    }
  },
  decorators: [(story) => <Provider store={store}>{story}</Provider>]
} as ComponentMeta<typeof Schematics>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Schematics> = (args) => {
  debugger
  return (
    <Container>
      <Feature>
        <Panel>
          <Schematics id={args.id} />
        </Panel>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.args = {
  id: 2
}

export { Normal };
