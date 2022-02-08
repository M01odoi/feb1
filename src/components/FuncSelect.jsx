

const FuncSelect = (props) => {
     const option = props.options.map((obj,i)=>{
        return <option key={i} value={obj.value} label={obj.label}>{obj.label}</option>
      })
  return (<div className='line'>
      {props.name}
    <select name={props.name} placeholder={props.placeholder} required={props.required}>
      {option}
    </select>
    </div>
  )
}
export default FuncSelect;