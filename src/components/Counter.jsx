import React from 'react'
import { useState } from 'react';
import '../CSS/Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handlerPlus = () => {
        setCount(prevCount => {
            return (prevCount + 1)
        });
    };

    const handlerMinus = () => {
        if(count > 0){
            setCount(prevCount => {
                return (prevCount - 1)
            });
        }
    };

    const handlerReset = () => {
        setCount(0);
    };

    return (
        <>
        <button onClick={handlerMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlerPlus}>+</button><br/>
        <button onClick={handlerReset} class="resetBtn">Reset</button>
        </>
    );
}

export default Counter