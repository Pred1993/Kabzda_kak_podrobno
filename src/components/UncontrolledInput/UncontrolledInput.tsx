import React, { ChangeEvent, RefObject, useRef, useState } from 'react';

const UncontrolledInput = () => {
  const [value, setValue] = useState('');
  // Доставание value через событие
  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.currentTarget.value)
  // }
  // return (
  //     <div>
  //         <input onChange={onChangeHandler} type="text"/> {value}
  //     </div>
  // );
  //
  // Доставание value через ссылочный ref
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <div>
      <input ref={inputRef} /> <button onClick={onClickHandler}>send</button>
      {value}
    </div>
  );
};

export default UncontrolledInput;
