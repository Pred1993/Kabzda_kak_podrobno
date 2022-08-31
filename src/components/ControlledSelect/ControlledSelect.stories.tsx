import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ControlledSelect from "./ControlledSelect";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ControlledSelect',
    component: ControlledSelect,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledSelect> = (args) => <ControlledSelect/>;

export const OnMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMode.args = {
};

