import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/AccordionAndUseReducer/Accordion';
import Select from './components/Select/Select';
import { UncontrolledAccordion } from './components/AccordionAndUseReducer/UncontrolledAccordion';
import UseMemo from './components/UseMemo/UseMemo';
import UseMemoAndReactMemo from './components/UseMemoAndReactMemo/UseMemoAndReactMemo';
import UseCallback from './components/UseCallback/UseCallback';
import UseState from './components/UseState/UseState';
import { UseEffect, UseEffect2 } from './components/UseEffeсt/UseEffect';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type ItemsType = {
  title: string;
  value: any;
};

function App() {
  const [important, setImportant] = useState<number>(4);
  const [value, setValue] = useState<ValueType>(0);
  const [bulb, setBulb] = useState(true);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const items: Array<ItemsType> = [
    { title: 'Artem', value: 1 },
    { title: 'Lena', value: 2 },
    { title: 'Denis', value: 3 },
    { title: 'Maxim', value: 4 },
    { title: 'Dmitriy', value: 5 },
  ];

  const onClickValue = (value: any) => {
    setValue(value);
  };
  const onChange = (important: number) => {
    setImportant(important);
  };

  const onChangeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App">
      {/*<ControlledSelect/>*/}
      {/*<UncontrolledInput/>*/}
      <UncontrolledAccordion title={'Menu'} items={items} onClick={onClickValue} />
      <Select important={important} onChange={onChange} items={items} />
      <Title title={'This is App component'} />
      <Title title={'My friend'} />
      Article 1
      <Accordion
        title={'Menu'}
        collapsed={collapsed}
        onChange={onChangeCollapsed}
        items={items}
        onClick={onClickValue}
      />
      <Accordion
        title={'Rest'}
        collapsed={!collapsed}
        onChange={onChangeCollapsed}
        items={items}
        onClick={onClickValue}
      />
      Article 2{/*<Rating setValue={setValue} value={value}/>*/}
      {/*<OnOff bulb={bulb} setBulb={setBulb}/>*/}
      <hr />
      <UseMemo />
      <hr />
      {/*<ReactMemo/>*/}
      {/*<UseMemoAndReactMemo/>*/}
      {/*<UseCallback/>*/}
      {/*<UseState/>*/}
      {/*<UseEffect/>*/}
      <UseEffect2 />
      {/*<ExampleData/>*/}
    </div>
  );
}

type TitlePropsType = {
  title: string;
};

const Title = (props: TitlePropsType) => {
  return <h3>{props.title}</h3>;
};
export default App;
