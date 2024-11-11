import React from 'react'

const EventClick = () => {
    let a = 19;
    const clickMe = () => {
        alert("Hello World");
    }
    const clickHere = () => {
        if (a > 18) {
            alert("Greater than 18");
        }
        else {
            alert("less than 18");
        }
    }
    const giveAlert = () => {
        alert("Over alert");
    }
    return (
        <div className="App">
            <h1>Namste</h1>
            <button onClick={clickMe}>Click here</button> <br />
            <button onClick={clickHere}>Check</button> <br />
            <span onMouseOver={giveAlert}>Point mouse here</span>
        </div>
    );
}

export default EventClick
