import React from 'react';

export default function FuncInput( props) {
  return (<>
      <span>{props.name}</span> <input {...props} onChange={(e) => props.onChange(e, props.name)}/>
    </>
  )
}