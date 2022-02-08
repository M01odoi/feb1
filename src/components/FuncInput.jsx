import React from 'react';
import validation from '../validation';

export default function FuncInput( props) {
  return (<div className={'line'}>
      {props.name} <input {...props} onChange={(e) => props.onChange(e, props.name)}/>
    </div>
  )
}