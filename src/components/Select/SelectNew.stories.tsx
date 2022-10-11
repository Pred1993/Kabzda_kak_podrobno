// Button.stories.js|ts|jsx|tsx

import React, { useState } from 'react';
import SelectNew from "./SelectNew";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'SelectNew',
    component: SelectNew,
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const Primary = () => {
    // Sets the hooks for both the label and primary props
    const [important, setImportant] = useState(1);
    return <SelectNew important={important} onChange={setImportant} items={[
        {title: 'Artem', value: 1},
        {title: 'Lena', value: 2},
        {title: 'Denis', value: 3},
        {title: 'Maxim', value: 4},
        {title: 'Dmitriy', value: 5},
    ]} />;
};



