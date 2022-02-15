const FuncButton = (props) => {
  const onClick=(e) => {
    e.preventDefault();
    props.onClick(e);
  }
  return(
    <button className='' onClick={onClick}>{props.name}</button>
  )
}
export default FuncButton;