import React, {useCallback, useMemo, useState} from 'react';

const NewMessagesCounter = (props: {count: number}) => {
    console.log('rerendering NewMessagesCounter')
    return (
        <div>
            {props.count}
        </div>
    );
};

const NewMessagesCounterContainer = React.memo(NewMessagesCounter)

const UseCallback = () => {
    console.log('rerendering UseCallback')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['react', 'js', 'redux', 'css'])

    const newBooks = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('r') > -1)
    }, [books])



    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'angular'])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => { // через useCallback
            setBooks([...books, 'angular'])
        }, [books])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>add counter</button>
            <NewMessagesCounterContainer count={counter}/>
            <BooksContainer books={newBooks} addBooks={memoizedAddBook}/>
        </div>
    );
};

export default UseCallback;


const Books = (props:{books: Array<string>; addBooks: () => void}) => {
    console.log('rerendering Books')
    const onClickButtonHandler = () => {
        props.addBooks()
    }
    return (
        <div>
            {props.books.map((b,i) => <div key={i}>{b}</div>)}
            <button onClick={onClickButtonHandler}>add books</button>
        </div>
    );
};

const BooksContainer = React.memo(Books)