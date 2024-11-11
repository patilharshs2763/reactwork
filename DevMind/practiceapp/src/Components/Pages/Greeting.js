import React from 'react'

const Greeting = () => {
    const d = new Date();
    const hrs = d.getHours();
    let greet = '';
    if (hrs < 12) {
        greet = "Morning!";
    }
    else if (hrs < 16) {
        greet = "Afternoon!";
    }
    else if (hrs < 20) {
        greet = "Evening!";
    }
    else {
        greet = "Night!";
    }
    console.log(hrs);
    // setword("Clicked!");


    return (
        <div>
            <h4>Hello, Good {greet}</h4>
        </div>
    );
}

export default Greeting
