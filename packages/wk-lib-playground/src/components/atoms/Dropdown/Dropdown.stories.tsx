import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import { Dropdown, DropdownAction } from '.';
import { Button } from '../Button';
import { Container } from '../Container';
import { DropdownRef } from './Dropdown';

export default {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args, ctx) => {
  const dropdownRef = useRef<DropdownRef>();
  return (
    <Container>
      <div className="p-5">
        <Button
          type='dark'
          className='d-block'
          onClick={(ev) =>
            dropdownRef.current &&
            dropdownRef.current?.show(ev as unknown as Event)
          }
        >
          Abrir
          <Dropdown ref={dropdownRef}>
            {ctx.parameters.items.map((item) => {
              return (
                <DropdownAction key={item} onClick={() => {}} className="pl-2">
                  {item}
                </DropdownAction>
              );
            })}
          </Dropdown>
        </Button>
      </div>
    </Container>
  );
};

const Normal = Template.bind({});
Normal.parameters = {
  items: ['Item 1', 'Item2', 'Item3'],
};

export { Normal };
