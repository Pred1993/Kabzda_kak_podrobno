import React, { useState } from 'react';

function generateDate() {
  // difficult counting
  console.log('generateDate');
  return 243243243242;
}

// При выполнении кода каждый ререндер компоненты UseState будет запускать сложную потенциально в вычислениях фуекцию generateDate, поэтому мы можем эту фуекцию вложить useCallback либо UseMemo, но вданном контексте мы используем навороченный UseState
// Таким образом мы можем в качестве инициализационного значения в UseState дать ссылку на функцию, и UseState вызовет ее единожды для получения стартового значения
// const UseState = () => {
//     // const initValue = generateDate()
//
//     const [counter, setCounter] = useState<number>(generateDate)
//
//     return (
//         <div>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             {counter}
//         </div>
//     );
// };
//
// export default UseState;
// В UseState при вызове можно добавлять ссылку на функцию, return которой он дабавит в стейт. Пример ниже:
const UseState = () => {
  // const initValue = generateDate()

  const [counter, setCounter] = useState<number>(generateDate);
  const changer = (state: number) => {
    return state + 1;
  };
  return (
    <div>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </div>
  );
};

export default UseState;
