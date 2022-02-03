import React from 'react';

export default function FuncInput(props) {
  return (<div className={'line'}>
      {props.name} <input {...props}/>
    </div>
  )
}