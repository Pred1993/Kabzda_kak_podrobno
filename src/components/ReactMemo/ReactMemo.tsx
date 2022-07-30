import React, {useState} from 'react';

const NewMessagesCounter = (props: {count: number}) => {
    console.log('rerendering NewMessagesCounter')
    return (
        <div>
            {props.count}
        </div>
    );
};
const Users = (props: {users: Array<string>}) => {
    console.log('rerendering Users')
    return (
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
    );
};

const UsersContainer = React.memo(Users)
const NewMessagesCounterContainer = React.memo(NewMessagesCounter)

const ReactMemo = () => {
    console.log('rerendering ReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['alex', 'dima', 'artem', 'lena'])
    const onClickButtonHandler = () => {
        setUsers([...users, 'Sveta'])
    }
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={onClickButtonHandler}>+</button>
         <NewMessagesCounterContainer count={counter}/>
         <UsersContainer users={users}/>
        </div>
    );
};

export default ReactMemo;