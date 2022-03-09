interface IProps {
    name: string;
    onChange: Function;
    options: Array<string>;
    className?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
}


const FuncSelect = (props: IProps) => {
    const option = props.options.map((obj, i) => {
        return <option key={i} value={obj} label={obj}> obj </option>
    })
    return (<div className="line">
            {props.name}
            <select name={props.name} placeholder={props.placeholder} required={props.required}
                    onChange={(e) => props.onChange(e, props.name)}>
                {option}
            </select>
        </div>
    )
}
export default FuncSelect;