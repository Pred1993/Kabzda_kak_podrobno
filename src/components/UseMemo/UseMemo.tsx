import React, {useMemo, useState} from 'react';

// В UseMemo передается функция колбек первым параметром и массив вторым параметром, а возвращает этот колбэк то, что мы хотим по итогу запомнить
// UseMemo работает по принципу кеша, единожды выполнив тело своей колбек функции он запомнит его значение и при условии того, что переменные из массива зависимостей (второй параметр передающийся в UseMemo) не будут изменяться, UseMemo не будет запускать заново тело функциию

// Если массив зависимостей пуст, то UseMemo запуститься единожды и всегда будет возвращать один и тот же результат

// UseMemo всегда должна возвращать какой-то результат (return) в отличие от React.memo
const UseMemo = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for b: {resultB}
            </div>
        </div>
    );
};

export default UseMemo;