import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DetailForm, { DetailFormStateEnum } from './DetailForm';
import { Navbar, Container, Feature, Panel } from '../../atoms';
import { ViewAttributeComponentEnum } from '../../../interfaces/view-attribute-with-relations';

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
  title: 'Components/Molecules/DetailForm',
  component: DetailForm,
} as ComponentMeta<typeof DetailForm>;

const mock = {
  createdAt: null,
  createdBy: null,
  updatedAt: null,
  updatedBy: null,
  id: 2,
  name: 'Policy',
  description: 'Políticas',
  isActive: true,
  pkField: 'id',
  attributes: [
    {
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      id: 21,
      name: 'id',
      desc: 'ID',
      label: 'ID',
      line: 1,
      size: 3,
      position: 0,
      sizePercent: 0,
      isReadOnly: true,
      isRequired: true,
      isVisible: true,
      isPrimaryKey: false,
      isColumnVisible: true,
      component: ViewAttributeComponentEnum.NUMBER,
      defaultValue: null,
      mask: null,
      tableId: 2,
    },
    {
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      id: 22,
      name: 'effect',
      desc: 'Efeito',
      label: 'Efeito',
      line: 1,
      size: 3,
      position: 1,
      sizePercent: 0,
      isReadOnly: false,
      isRequired: true,
      isVisible: true,
      isPrimaryKey: false,
      isColumnVisible: false,
      component: ViewAttributeComponentEnum.TEXT,
      defaultValue: null,
      mask: null,
      tableId: 2,
    },
    {
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      id: 23,
      name: 'actions',
      desc: 'Ações',
      label: 'Ações',
      line: 1,
      size: 3,
      position: 2,
      sizePercent: 0,
      isReadOnly: false,
      isRequired: true,
      isVisible: true,
      isPrimaryKey: false,
      isColumnVisible: false,
      component: ViewAttributeComponentEnum.COMBO,
      defaultValue: null,
      mask: null,
      tableId: 2,
      options: [{ label: 't', value: '1'}]
    },
    {
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      id: 24,
      name: 'name',
      desc: 'Name',
      label: 'Name',
      line: 1,
      size: 3,
      position: 3,
      sizePercent: 0,
      isReadOnly: false,
      isRequired: true,
      isVisible: true,
      isPrimaryKey: false,
      isColumnVisible: true,
      component: ViewAttributeComponentEnum.TEXT,
      defaultValue: null,
      mask: null,
      tableId: 2,
    },
    {
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      id: 25,
      name: 'description',
      desc: 'Description',
      label: 'Description',
      line: 2,
      size: 3,
      position: 4,
      sizePercent: 0,
      isReadOnly: false,
      isRequired: true,
      isVisible: true,
      isPrimaryKey: false,
      isColumnVisible: false,
      component: ViewAttributeComponentEnum.TEXT,
      defaultValue: null,
      mask: null,
      tableId: 2,
    },
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DetailForm> = () => {
  return (
    <Container>
      <Navbar features={features} />
      <Feature>
        <Panel>
          <DetailForm
            pkFieldName="test3"
            state={DetailFormStateEnum.NEW}
            record={{}}
            attributes={mock.attributes}
          />
        </Panel>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
