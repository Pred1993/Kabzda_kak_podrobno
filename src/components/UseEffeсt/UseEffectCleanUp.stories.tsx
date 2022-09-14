import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UseEffectCleanUp} from "./UseEffect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UseEffectCleanUp',
  component: UseEffectCleanUp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof UseEffectCleanUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UseEffectCleanUp> = (args) => <UseEffectCleanUp/>;

export const UseEffectCleanUpStory  = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UseEffectCleanUpStory.args = {
  mode: 'digital'
};

