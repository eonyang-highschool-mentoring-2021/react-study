import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import InputBox from './InputBox';

function CalcRoot():JSX.Element {
  const [result,setResult]=useState(0);
  function add(temp:number){
    setResult(result+temp);
  }
  function minus(temp:number){
    setResult(result-temp);
  }
  function multiplication(temp:number){
    setResult(result*temp);
  }
  function division(temp:number){
    setResult(result/temp);
  }
  function clear(){
    setResult(result*0);
  }
  return (
    <div>
      <h1>계산기</h1>
      <Button variant="contained" onClick={()=>{
        add(5);
      }}>plus(+5)</Button>
  <Button variant="contained" color="primary" onClick={()=>{
        minus(5);
      }}>
  minus(-5)
  </Button>
  <Button variant="outlined" color="primary" onClick={()=>{
        multiplication(2);
      }}>
  multiplication(X2)
  </Button>
  <Button variant="outlined" color="secondary" onClick={()=>{
        division(2);
      }}>
  division(%2)
  </Button>
  <Button variant="outlined" color="primary" onClick={()=>{
        clear();
      }}>
  clear(0)
  </Button>
    <InputBox result={result}/>

    </div>
  )
}


export default CalcRoot;