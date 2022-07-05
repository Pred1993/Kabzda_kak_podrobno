import React from 'react';
import classes from './OnOf.module.css'

export type OnOfPropsType = {
    bulb: boolean
    setBulb: (bulb: boolean) => void
}
export const OnOff = (props: OnOfPropsType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.bulb ? 'green' : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !props.bulb ? 'red' : "white"
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.bulb ? 'green' : "red"
    }
    const onclickHandlerOn = () => {
        props.setBulb(true)
    }
    const onClickHandlerOff = () => {
        props.setBulb(false)
    }
    return (
        <div>
            <div style={onStyle}
                 onClick={onclickHandlerOn}>On</div>
            <div style={offStyle}
                 onClick={onClickHandlerOff}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    );
};

