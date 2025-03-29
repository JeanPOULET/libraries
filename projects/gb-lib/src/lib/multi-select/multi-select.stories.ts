
import type { Meta, StoryObj } from '@storybook/angular';
import {expect, fn, userEvent, within} from '@storybook/test';

import { MultiSelectComponent } from './multi-select.component';

interface User{
  name: string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MultiSelectComponent<User>> = {
  title: 'compo/Multiselect',
  component: MultiSelectComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<MultiSelectComponent<User>>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithFive: Story = {
  args: {
    name: '5'
  },
};

export const WithOne: Story = {
  args: {
    name: '1',
    values: [
      {
        name:'Francis'
      },      {
        name:'Francois'
      },      {
        name:'Bastien'
      },      {
        name:'Damien'
      },
    ]
  },
};

export const WithTen: Story = {
  args: {
    name: '10'
  },
};
