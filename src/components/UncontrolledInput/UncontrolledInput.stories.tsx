import UncontrolledInput from "./UncontrolledInput";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'UncontrolledInput',
    // component: UncontrolledInput
}

const Template: ComponentStory<typeof UncontrolledInput> = (args) => <UncontrolledInput/>;
export const UncontrolledInputStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledInputStories.args = {
}
