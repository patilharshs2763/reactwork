import React from 'react'

const Operators = () => {
    let x = 15;
    let z = 16;
    let y = 5;
    const add = x + y;
    const sub = x - y;
    const mult = x * y;
    const div = x / y;
    const mod = z % y;
    // console.log("Add:", add)
    // console.log("sub:", sub)
    // console.log("mult:", mult)
    // console.log("div:", div)
    // console.log("mod:", mod)
    return (
        <div className='operators'>
            <p>Add: {add}</p>
            <p>Subtract: {sub}</p>
            <p>Multiply: {mult}</p>
            <p>Divide: {div}</p>
            <p>Modulus: {mod}</p>
        </div>
    )
}

export default Operators
