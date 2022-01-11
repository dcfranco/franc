import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Table, TableBody, TableColumn, TableHead, TableRecord } from '.';
import {Container} from '../Container'
import {Feature} from '../Feature'
import {Panel} from '../Panel'
import { ViewAttributeComponentEnum } from '../../../interfaces/view-attribute-with-relations';

export default {
  title: 'Components/Atoms/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

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

const mockRecords = [{
  id: 'id',
  name: 'Name',
  effect: 'Effect',
  actions: '1',
  description: 'Test'
}, {
  id: 'id',
  name: 'Name',
  effect: 'Effect',
  actions: '2',
  description: 'Test'
},
{
  id: 'id',
  name: 'Name',
  effect: 'Effect',
  actions: '3',
  description: 'Test'
}]
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = () => {
  return (
    <Container>
      <Feature>
        <Panel>
          <Table>
            <TableHead>
              {mock.attributes.map((field) => {
                return (
                  <TableColumn name={field.name}>{field.label}</TableColumn>
                );
              })}
            </TableHead>
            <TableBody>
              {mockRecords.map((rec, i) => (
                <TableRecord key={rec.id} isSelected={i == 1} record={rec} columns={mock.attributes}>
                  test
                </TableRecord>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </Feature>
    </Container>
  );
};

const Normal = Template.bind({});

export { Normal };
