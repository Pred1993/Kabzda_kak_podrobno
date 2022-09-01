import React, {useMemo, useState} from 'react';

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
// Существует два синтаксиса React.memo: через контейнерную компоненту как в случае ниже и через оборачивание функции в memo() как проиллюстрировано в компоненте UseMemo
const UsersContainer = React.memo(Users)
const NewMessagesCounterContainer = React.memo(NewMessagesCounter)

const UseMemoAndReactMemo = () => {
    console.log('rerendering ReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['alex', 'dima', 'artem', 'lena'])
    const newUsers = useMemo(() => {
     return users.filter(u => u.toLowerCase().indexOf('v') > -1)
    }, [users])

    const onClickButtonHandler = () => {
        setUsers([...users, 'Sveta'])
    }
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>add counter</button>
            <button onClick={onClickButtonHandler}>add users</button>
            <NewMessagesCounterContainer count={counter}/>
            <UsersContainer users={newUsers}/>
        </div>
    );
};

export default UseMemoAndReactMemo;