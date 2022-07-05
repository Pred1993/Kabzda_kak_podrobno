import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}
export const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (<div>
            <AccordionTitle title={props.title}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onClickHandlerCollapsed = () => {
        props.setCollapsed(!props.collapsed)
    }
    return (
        <h3 onClick={onClickHandlerCollapsed}>{props.title}</h3>
    );
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};
