import React from 'react'
import {useState} from 'react'
function Reset(props) {
    let [cNo,setcNo] = useState(0);
    let [cValue,setcValue] = useState(0);
    const counterNumberSet = (e) => {
        setcNo(e.target.value);
    }
    const counterValueSet = (e) => {
        setcValue(e.target.value);
    }
    const setResetCounter = props.setResetCounter;

    const setValues = () => {
        setResetCounter(cNo,cValue);
    }
    return (
        <div>
            <h1> Reset Boxes </h1>
            <div>
                <label> Enter The Counter Number </label>
                <input type="text" name="" id="" value = {cNo} onChange = {counterNumberSet} />
            </div>
                <label> Enter The Value </label>
                <input type="text" name="" id="" value = {cValue} onChange = {counterValueSet} />
            <div>
                <button onClick = {setValues}> Reset Counter </button>
            </div>
        </div>
    )
}


export default Reset