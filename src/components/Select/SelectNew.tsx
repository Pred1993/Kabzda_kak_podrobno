import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from './SelectNew.module.css'

export type ItemsType = {
    title: string;
    value: number;
};
export type SelectPropsType = {
    important: number;
    onChange: (important: number) => void;
    items: Array<ItemsType>;
};
const SelectNew = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<number>(props.important)
    console.log('props.important', props.important)
    console.log('hoveredElementValue', hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.important)
    },[props.important])
    const selectedItem = props.items.find((i) => i.value === props.important)
    const hoveredItem = props.items.find((i) => i.value === hoveredElementValue)
    const mapItems = props.items.map(i => {
        const onItemClickHandler = () => {
            props.onChange(i.value)
            setActive(!active)
        }
        const onMouseEnterHoverHandler = () => {
            setHoveredElementValue(i.value)
        }
        return <div key={i.value} className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                    onClick={onItemClickHandler} onMouseEnter={onMouseEnterHoverHandler}>{i.title}</div>
    })
    const toggleItems = () => {
        setActive(!active)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        // setHoveredElementValue(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter') {
            setActive(!active)
        }
        if (e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Lida</option>
            </select>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={styles.items}>{mapItems}</div>}
            </div>
        </>
    );
};

export default SelectNew;