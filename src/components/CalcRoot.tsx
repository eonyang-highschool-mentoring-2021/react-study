import { Button, Slider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import InputBox from './InputBox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


function CalcRoot():JSX.Element {
  const [result,setResult]=useState(0);
  const [rightnumber,setrightnumber]=useState(0);
  const [leftnumber,setleftnumber]=useState(0);
  function add(temp:number){
    setResult(leftnumber+temp);
  }
  function minus(temp:number){
    setResult(leftnumber-temp);
  }
  function multiplication(temp:number){
    setResult(leftnumber*temp);
  }
  function division(temp:number){
    setResult(leftnumber/temp);
  }
  function clear(){
    setResult(0);
  }
  function handleleftnumber(e:any){
    setleftnumber(Number(e.target.value));

  }function handlerightnumber(e:any){
    setrightnumber(Number(e.target.value));
  }
  return (
    <div>
      <h1>계산기</h1>
      <TextField id="outlined-basic" label="LeftNumber" variant="outlined" value={leftnumber} onChange={handleleftnumber}/>
      <TextField id="filled-basic" label="RightNumber" variant="filled" value={rightnumber} onChange={handlerightnumber}/>
    <h1></h1>
      <Button variant="contained" onClick={()=>{
        add(rightnumber);
      }}>plus</Button>
  <Button variant="contained" color="primary" onClick={()=>{
        minus(rightnumber);
      }}>minus</Button>
  <h1></h1>
  <Button variant="outlined" color="primary" onClick={()=>{
        multiplication(rightnumber);
      }}>multiplication</Button>
  <Button variant="outlined" color="secondary" onClick={()=>{
        division(rightnumber);
      }}>division</Button>
  <Button variant="outlined" color="primary" onClick={()=>{
        clear();
      }}>clear(0)</Button>
    <InputBox result={result}/>
    </div>
  )
}
export default CalcRoot;