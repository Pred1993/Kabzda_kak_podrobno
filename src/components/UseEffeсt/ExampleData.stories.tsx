import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ExampleData} from "./UseEffect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ExampleData',
  component: ExampleData,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ExampleData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleData> = (args) => <ExampleData {...args}/>;

export const ExampleDataDigital  = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleDataDigital.args = {
  mode: 'digital'
};

export const ExampleDataAnalog = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleDataAnalog.args = {
  mode: 'analog'
};
