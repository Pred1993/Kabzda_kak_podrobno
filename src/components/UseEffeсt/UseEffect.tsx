import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')
    // useEffect срабатывает только после рендера JSX разметки и используется если нам в компоненте необходимо выполнить какие-то сайдэффекты

    // useEffect будет срабатывать на каждом рендере кщмпоненты
    useEffect(() => {
        debugger
        console.log('useEffect')
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString()
    })
// useEffect будет срабатывать единожды, после того как компонента смонтировалась, аналог componentDidMount
    useEffect(() => {
        debugger
        console.log('useEffect')
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString()
    }, [])

// useEffect будет срабатывать после первого рендера и каждый раз когда изменяется переменная в массиве зависимостей
    useEffect(() => {
        debugger
        console.log('useEffect')
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString()
    }, [counter])
    return (
        <>
            Hello, {counter}, {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    );
};

export const UseEffect2 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')
    // useEffect срабатывает только после рендера JSX разметки

    useEffect(() => {
        console.log('useEffect')
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        // setTimeout(() => {
        //     debugger
        //     document.title = counter.toString()
        // }, 1000)
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};
const dateRebranding = (num: number) => num < 10 ? "0" + num : num
export const ExampleData = () => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
       const setIntervalId = setInterval(() => {
            setData(new Date())
        }, 1000)

   return () => {
        clearInterval(setIntervalId)
   }
    }, [])
    return (
        <>
            <span>{dateRebranding(data.getHours())}</span>
            :
            <span>{dateRebranding(data.getMinutes())}</span>
            :
            <span>{dateRebranding(data.getSeconds())}</span>
        </>
    );
};