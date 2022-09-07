import React, { useReducer } from 'react';
import { ItemsType } from '../../App';
import { reducer } from './reducer';

type AccordionPropsType = {
  title: string;
  items: Array<ItemsType>;
  onClick: (value: any) => void;
};

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  let [state, dispatch] = useReducer(reducer, { collapsed: false });
  return (
    <div>
      {/*<AccordionTitle title={props.title}*/}
      {/*                onChange={() => setCollapsed(!collapsed)}*/}
      {/*/>*/}
      <AccordionTitle
        title={props.title}
        onChange={() => {
          dispatch({ type: 'TOGGLE-COLLAPSED' });
        }}
      />
      {!state.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  );
};
type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};
const AccordionTitle = (props: AccordionTitlePropsType) => {
  const onClickHandlerCollapsed = () => {
    props.onChange();
  };
  return <h3 onClick={onClickHandlerCollapsed}>{props.title}</h3>;
};
export type AccordionBodyPropsType = {
  items: Array<ItemsType>;
  onClick: (value: any) => void;
};
const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    <ul>
      {props.items.map((i, index) => (
        <li onClick={() => props.onClick(i.value)} key={index}>
          {i.title}
        </li>
      ))}
    </ul>
  );
};
