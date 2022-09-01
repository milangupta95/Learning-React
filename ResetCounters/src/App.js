import React from 'react';
import { useState } from 'react';
import './App.css';
import ContextAPI from './ContextAPI';
import CounterGroup from './CounterGroup';
import Reset from './Reset';
function App() {
  const [counterNum,setcounterNum] = useState("");
  const [counterValue,setCounterValue] = useState("");

  const setResetCounter = (cNo,cVal) => {
      setcounterNum(cNo);
      setCounterValue(cVal);
  }

  const resetValues = () => {
      setCounterValue("");
      setcounterNum("");
  }
  return (
      <div>
          <h1> Reset Counter App </h1>
          <hr/>
          <Reset setResetCounter = {setResetCounter}></Reset>
          <hr/>
          <CounterGroup counterNum = {counterNum} counterValue = {counterValue} resetValues = {resetValues}></CounterGroup>
          <ContextAPI></ContextAPI>
      </div>
  )
}

export default App;
