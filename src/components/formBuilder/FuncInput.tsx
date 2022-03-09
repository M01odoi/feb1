import React from 'react';

interface IProps {
    name: string;
    onChange: Function;
    className?: string;
    field?: string;
    placeholder?: string;
    type?: string;
    validations?: object;
    required?: boolean;
}

export default function FuncInput(props: IProps) {
    return (<>
            <span>{props.name}</span>
            <input {...props} onChange={(e) => props.onChange(e, props.name, props.field)}/>
        </>
    )
}