import React from 'react'
import Counter from './Counter';
function CounterGroup(props) {
    let counterNum = props.counterNum;
    let counterValue = props.counterValue;
    let resetValues = props.resetValues;
    
    return (
        <div>
            <h1> Counters </h1>
            <Counter number = {1} counterNum = {counterNum} 
            counterValue = {counterValue} resetValues = {resetValues}/>
            <Counter number = {2} counterNum = {counterNum} 
            counterValue = {counterValue} resetValues = {resetValues}/>
            <Counter number = {3} counterNum = {counterNum} 
            counterValue = {counterValue} resetValues = {resetValues}/>
        </div>
    )
}

export default CounterGroup;