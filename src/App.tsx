import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOf/OnOf";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [value, setValue] = useState<ValueType>(0)
    const [bulb, setBulb] = useState(true)

    return (
        <div className='App'>
            <Title title={'This is App component'}/>
            <Title title={'My friend'}/>
            Article 1
            <Accordion title={'Menu'}/>
            <Accordion title={'Rest'}/>d
            Article 2
            <Rating setValue={setValue} value={value}/>
            <OnOff bulb={bulb} setBulb={setBulb}/>

        </div>
    );
}

type TitlePropsType = {
    title: string
}

const Title = (props: TitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}
export default App
