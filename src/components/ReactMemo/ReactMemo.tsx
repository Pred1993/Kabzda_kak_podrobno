import React, { memo, useState } from 'react';

const NewMessagesCounter = memo((props: { count: number }) => {
  console.log('rerendering NewMessagesCounter');
  return <div>{props.count}</div>;
});
const Users = memo((props: { users: Array<string> }) => {
  console.log('rerendering Users');
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
});
const ReactMemo = () => {
  console.log('rerendering ReactMemo');
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState<Array<string>>(['alex', 'dima', 'artem', 'lena']);
  const onClickButtonHandler = () => {
    setUsers([...users, 'Sveta']);
  };
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ counter</button>
      <button onClick={onClickButtonHandler}>+ users</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </div>
  );
};

export default ReactMemo;
