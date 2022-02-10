const FuncButton = (props) => {
  const onClick=(e) => {
    e.preventDefault();

  }
  return(
    <button onClick={onClick}>{props.name}</button>
  )
}
export default FuncButton;