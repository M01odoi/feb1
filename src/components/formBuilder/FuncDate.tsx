interface IProps {
    className: string,
    field: string,
    name: string,
    onChange: Function,
    type: string
}

const FuncDate = (props: IProps) => {
    return (
        <>
            <span>{props.name}</span> <input {...props} onChange={e => props.onChange(e, props.name, props.field)}/>
        </>
    )
}

export default FuncDate;