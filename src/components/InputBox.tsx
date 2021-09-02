import React from 'react';
interface InputBoxprops{
result : number;
}

function InputBox(props:InputBoxprops):JSX.Element {
  return (
    <div>
<h1>{props.result}</h1>
    </div>
  )
}

export default InputBox;