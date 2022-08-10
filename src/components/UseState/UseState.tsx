import React, {useState} from 'react';

const UseState = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
};

export default UseState;