// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import {ComponentStory} from "@storybook/react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

const getCategoryObj = (categoryName: string) => (
    {
        table: {
            category: categoryName
        }
    })

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        onClick: {
            ...getCategoryObj('Events')
        },
        onChange: {
            ...getCategoryObj('Events')
        },
        items: {
            ...getCategoryObj('Main')
        },
        collapsed: {
            ...getCategoryObj('Main')
        },

        title: {
            ...getCategoryObj('Main')
        }
    }
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const onChangeCollapsed = action('accordion mode change event fired')
const onClickValue = action('some item was clicked')
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const callbackProps = {
    onClick: onClickValue,
    onChange: onChangeCollapsed
}
export const MenuCollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuCollapsedMode.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,
    items: [
        {title: 'Artem', value: 1},
        {title: 'Lena', value: 2},
        {title: 'Denis', value: 3},
        {title: 'Maxim', value: 4},
        {title: 'Dmitriy', value: 5}
    ]
}

export const RestUnCollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RestUnCollapsedMode.args = {
    ...callbackProps,
    title: "Rest",
    collapsed: false,
    items: [
        {title: 'Artem', value: 1},
        {title: 'Lena', value: 2},
        {title: 'Denis', value: 3},
        {title: 'Maxim', value: 4},
        {title: 'Dmitriy', value: 5}
    ]
}
