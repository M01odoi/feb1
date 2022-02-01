import React, { useState } from 'react';

export default function FuncInput(props) {
  const [value, setValue] = useState(props.value);
  function changeValue(event){
    console.log(value);
    setValue(event.target.value);
  }
  return (
    <div  className={'component'}>
      <div>React Functional Component</div>
      <input name={props.name} value={value} onChange={changeValue}/>
    </div>
  )
}