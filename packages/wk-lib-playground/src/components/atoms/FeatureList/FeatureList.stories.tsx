import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FeatureList, FeatureListItem } from '.';
import { Container } from '../Container';

const features = [
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
  {
    code: '1',
    icon: 'account_circle',
    name: 'Account',
  },
  {
    code: '2',
    icon: 'language',
    name: 'Manager',
  },
];

export default {
  title: 'Components/Atoms/FeatureList',
  component: FeatureList,
} as ComponentMeta<typeof FeatureList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeatureList> = () => {
  return (
    <Container>
      <FeatureList>
        {features.map((feature, i) => (
          <FeatureListItem key={i} feature={feature} />
        ))}
      </FeatureList>
    </Container>
  );
};

const TemplateItem: ComponentStory<typeof FeatureListItem> = (args) => {
  return (
    <Container>
      <FeatureList>
        <FeatureListItem feature={args.feature} />
      </FeatureList>
    </Container>
  );
};

const List = Template.bind({});
const Item = TemplateItem.bind({});
Item.args = {
  feature: {
    name: 'Account',
    icon: 'account_circle'
  }
}

export { List, Item };
