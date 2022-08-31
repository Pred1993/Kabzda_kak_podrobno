import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOf";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOf',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMode.args = {
    bulb: true,
    setBulb: (bulb) => undefined,
};

export const OffMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OffMode.args = {
    bulb: true,
    setBulb: (bulb) => undefined,
};
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
