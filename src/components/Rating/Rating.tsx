import React from "react";
import {ValueType} from "../../App";

export type RatingPropsType = {
    setValue: (value: ValueType) => void
    value: ValueType
}
export const Rating = (props: RatingPropsType) => {

    return (<div>
            <Star selected={props.value > 0} setValue={props.setValue} value={1}/>
            <Star selected={props.value > 1} setValue={props.setValue} value={2}/>
            <Star selected={props.value > 2} setValue={props.setValue} value={3}/>
            <Star selected={props.value > 3} setValue={props.setValue} value={4}/>
            <Star selected={props.value > 4} setValue={props.setValue} value={5}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    setValue: (value: ValueType) => void
    value: ValueType
}
const Star = (props: StarPropsType) => {
    return (
        <span onClick={() => props.setValue(props.value)} className='Star '>{props.selected ?
            <b>Star </b> : 'Star '} </span>
    )
}
