import React, { useState } from 'react'
import './Style.css';
const Counter = () => {
    const [word, setword] = useState("Hello");
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);
    
    const wordChange = () => {
        console.log("Clicked");
        setword("Clicked!");
    }

    console.log("num", num);
    const decNum = () => {
        if (num > 0) {
            setNum(Number(num - 1));
            console.log("num", num);
        }
    }

    const incNum = () => {
        if (num < 10) {
            setNum(Number(num + 1));
            console.log("num", num);
        }
    }
    const changeNum = (e) => {
        setNum(e.target.value);
    }

    const newValue = (e) => {
        setNum(e.target.value);
    }

    const changeCount = () => {
        setCount(Number(count + 1));
        // setCount(Number(count++));
        // setCount(e.target.value);
    }


    return (
        <div>
            <h1>{word}</h1>
            <button onClick={wordChange}>Click Here!</button>
            <br />
            <h1>Count:{count}</h1>
            <button onClick={changeCount}>Count</button>
            <div className='state-ex'>
                <button onClick={decNum} className='dec-button'>Decrment</button>
                <label onChange={changeNum} className='res-label'>{num}</label>
                <button onClick={incNum} className='inc-button'>Increment</button>
                <input onChange={newValue} value={num}></input>
            </div>
        </div>
    )
}

export default Counter
