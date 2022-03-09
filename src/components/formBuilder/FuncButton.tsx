const FuncButton = (props: { name: string, onClick: Function }) => {
    const onClick = (e) => {
        e.preventDefault();
        props.onClick(e);
    }
    return (
        <button className='' onClick={onClick}>{props.name}</button>
    )
}
export default FuncButton;