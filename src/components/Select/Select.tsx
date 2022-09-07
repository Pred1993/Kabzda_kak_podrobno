import React, { KeyboardEvent, useEffect, useState } from 'react';
import s from './Select.module.css';

export type ItemsType = {
  title: string;
  value: any;
};

export type SelectPropsType = {
  important: number;
  onChange: (important: number) => void;
  items: Array<ItemsType>;
};
const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState<boolean>(false);
  const [hoveredElementValue, setHoveredElementValue] = useState<number>(props.important);
  const selectedItem = props.items.find((i) => i.value === props.important);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);
  useEffect(() => {
    setHoveredElementValue(props.important);
  }, [props.important]);

  const onClickHandler = (important: number) => {
    props.onChange(important);
    setActive(!active);
  };
  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
          // setHoveredElementValue(hoveredElementValue + 1)
        }
        if (!selectedItem) {
          props.onChange(props.items[0].value);
        }
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  };
  return (
    <>
      {/*<select name="" id="">*/}
      {/*    <option value="">Artem</option>*/}
      {/*    <option value="">Lena</option>*/}
      {/*    <option value="">Denis</option>*/}
      {/*    <option value="">Maxim</option>*/}
      {/*    <option value="">Dmitriy</option>*/}
      {/*</select>*/}
      <div onKeyUp={onKeyUpHandler} tabIndex={0} className={s.select}>
        <span
          onClick={() => {
            setActive(!active);
          }}
        >
          {selectedItem && selectedItem.title}
        </span>

        {active ? (
          <div className={s.items}>
            {props.items.map((i) => (
              <div
                onMouseEnter={() => setHoveredElementValue(i.value)}
                className={s.item + ' ' + (hoveredItem?.value === i.value ? s.selected : '')}
                onClick={() => {
                  onClickHandler(i.value);
                }}
                key={i.value}
              >
                {i.title}
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Select;
