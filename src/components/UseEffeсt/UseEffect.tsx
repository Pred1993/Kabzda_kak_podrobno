import React, {useEffect, useState} from 'react';
import AnalogClock from "./ClockComponent/AnalogClock";
import DigitalClock from "./ClockComponent/DigitalClock";

export const UseEffect = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample');
    // useEffect срабатывает только после рендера JSX разметки и используется если нам в компоненте необходимо выполнить какие-то сайдэффекты

    // useEffect будет срабатывать на каждом рендере компоненты
    useEffect(() => {
        console.log('useEffect every render');
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString();
    });
    // useEffect будет срабатывать единожды, после того как компонента смонтировалась, аналог componentDidMount
    useEffect(() => {
        console.log('useEffect only first render');
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString();
    }, []);

    // useEffect будет срабатывать после первого рендера и каждый раз когда изменяется переменная в массиве зависимостей
    useEffect(() => {
        console.log('useEffect first render and every counter change');
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        document.title = counter.toString();
    }, [counter]);
    return (
        <>
            Hello, {counter}, {fake}
            <button onClick={() => setFake(fake + 1)}>fake</button>
            <button onClick={() => setCounter(counter + 1)}>counter</button>
        </>
    );
};

export const UseEffect2 = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample');
    // useEffect срабатывает только после рендера JSX разметки и поскольку массив зависимостей пуст useEffect вызовется единожды и запомнит значение counter = 1 из замыкания. setInterval запустится и каждую секунду будет брать значение counter = 1 из замыкания при первом вызове, поэтому в теле компоненты в первый раз запишется counter = 2 и впредь реакт не будет перерисовываться, так как значение стейта отныне всегда будет counter = 2 (комментарий к случаю 2)

    // В третем случае также работает замыкание из второго, но в setCounter мы передаем функцию (смотри навороченный UseState) которая подбрасывает актуальный стейт
    useEffect(() => {
        console.log('useEffect');
        // api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        // setTimeout(() => {
        //     debugger
        //     document.title = counter.toString()
        // }, 1000)
        // setInterval(() => {
        //     console.log('tick')       случай 2
        //     setCounter(counter + 1)
        // }, 1000)
        setInterval(() => {
            console.log('tick' + counter);
            setCounter((state) => state + 1); // случай 3
        }, 1000);
    }, []);

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};

type ExampleDataPropsType = {
    mode?: 'digital' | 'analog'
}

export const ExampleData = ({mode}: ExampleDataPropsType) => {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setData(new Date());
        }, 1000);

        return () => {
            clearInterval(setIntervalId);
        };
    }, []);
    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClock data={data}/>
            break
        case 'digital':
        default:
            view = <DigitalClock data={data}/>
    }
    return <>{view}</>
}


export const UseEffectCleanUp = () => {
    const [number, setNumber] = useState(1);
    console.log('Component rendered with ' + number);
    // При наличии массива зависимостей каждый раз при изменении number будет срабатывать UseEffect, но сразу он будет убивать свой прошлый вызов: таким образом в консоли мы увидим 'Component rendered 2' затем 'Component death 1' и только потом 'Effect occurred 2'
    useEffect(() => {
        console.log('Effect occurred ' + number)

        return () => {
            console.log('Component death ' + number)
        }
    }, [number])
    return (
        <>
            Hello, counter: {number}
            <button onClick={() => setNumber(number + 1)}>number</button>
        </>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('Component rendered with ' + text);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log('adadad')
            setText((state) => state + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            // отписка от события чтобы не накапливались обработчики
            window.document.removeEventListener('keypress', handler)
        }
        }
    , [])
    return (
        <>
            Typed, text: {text}
        </>
    );
};