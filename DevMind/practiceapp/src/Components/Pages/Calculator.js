import React, { useState } from 'react'

const Calculator = () => {
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [sum, setSum] = useState();

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'num1') {
            setN1(value);
        }
        else if (name === 'num2') {
            setN2(value);
        }
    }

    const calculate = () => {
        const num1 = Number(n1);
        const num2 = Number(n2);
        setSum(num1 + num2);
    }

    
    return (
        <div className='calculator'>
            <input className='input1' type='number' name='num1' value={n1} placeholder='Enter number 1' onChange={handleInput} />
            <input className='input1' type='number' name='num2' value={n2} placeholder='Enter number 2' onChange={handleInput} />
            <button className='add' onClick={calculate} >Add</button>
            <p>Sum:{sum}</p>
        </div>
    )
}

export default Calculator
