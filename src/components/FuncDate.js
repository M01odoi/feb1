const FuncDate = (props) => {
  return (
    <>
    <span>{props.name}</span>  <input {...props} onChange={e => props.onChange(e,props.name, props.field)}/>
    </>
  )
}

export default FuncDate;