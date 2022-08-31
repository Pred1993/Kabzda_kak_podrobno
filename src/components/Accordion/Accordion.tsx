import React from "react";
import {ItemsType} from "../../App";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that a showed when accordion is opened (not collapsed)
     */
    items: Array<ItemsType>
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (<div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onClickHandlerCollapsed = () => {
        props.onChange()
    }
    return (
        <h3 onClick={onClickHandlerCollapsed}>{props.title}</h3>
    );
};
export type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyPropsType ) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    );
};
