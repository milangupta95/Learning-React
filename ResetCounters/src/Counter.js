import React from 'react'
import { useState } from 'react';
function Counter(props) {
    let number = props.number;
    let counterValue = props.counterValue;
    let counterNum = props.counterNum;
    let [time,setTime] = useState("0");

    if(number == counterNum && time != counterValue) {
        setTime(counterValue);
        props.resetValues();
    }

    const increaseTime = () => {
        let oldTime = Number(time);
        let newTime = oldTime + 1;
        setTime(newTime);
    }
    const decreaseTime = () => {
        let oldTime = Number(time);
        let newTime = oldTime - 1;
        setTime(newTime);
    }
    return (
        <div>
            <button onClick = {decreaseTime}>-</button>
            <label>{time}</label>
            <button onClick = {increaseTime}>+</button>
        </div>
    )
}

export default Counter;