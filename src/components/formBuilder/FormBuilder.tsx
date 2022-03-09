import FuncInput from './FuncInput.tsx';
import FuncSelect from './FuncSelect.tsx';
import FuncCheckbox from './FuncCheckbox.tsx';
import FuncButton from './FuncButton.tsx';
import FuncDate from './FuncDate.tsx'
import validation from '../../validation.ts';
import React, {useEffect, useState} from 'react';
import './formBuilder.css';

interface IProps {
    state?: object,
    setState?: Function,
    fields: Array<object>,
    submit: Function
}

const FormBuilder = (props: IProps) => {
    const [state, setState] = useState(props.state || []);
    const [valid, setValid] = useState([]);
    const [submitClicked, setSubmitClicked] = useState(false);
    useEffect(() => {
        const arr: object = props.fields.map((obj) => {
            return {name: obj.name, value: ''}
        })
        setState(arr);
    }, [])
    const fields: object = {
        select: FuncSelect,
        text: FuncInput,
        checkbox: FuncCheckbox,
        date: FuncDate,
    };
    // const expectedValues = {
    //     confirmPassword: state.find((_) => _.name === 'newPassword'),
    //     // default: obj.validations.onChange.minLength, // вместо minLength: 8
    // }
    const validate = (): void => {
        let resultOfValid = [];
        props.fields.forEach((obj) => {
            const currentField = state.find((_) => _.name === obj.name);
            const pass = state.find((_) => _.name === 'newPassword');
            if (obj.validations) {
                for (const prop of obj.validations.onChange) {
                    resultOfValid.push(validation[prop.name]({
                        value: currentField.value,
                        required: prop.minLength || pass?.value,
                        field: obj.name,
                    }));
                }
            }
        })
        setValid(resultOfValid);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: string, field: string): void => {
        if (props.setState) {
            props.setState({...props.state, [field]: e.target.value});
        }
        const newValue: object = state.map((obj) => {
            if (obj.name === name) {
                obj.value = e.target.value;
            }
            return obj;
        });
        setState(newValue);
    }
    useEffect((): void => {
        if (state.length) {
            validate();
        }
    }, [state]);

    const renderErrors = (obj:object, field:Array<object>):object => {
        const currentField = state.find((_) => _.name === obj.name);
        if (currentField && obj.validations) {
            return field.filter(fieldObj => currentField.name === fieldObj.name).filter((error) => !!error.error)
                .map((error, index) => (
                        <span key={index} className={submitClicked ? 'spanDef' : 'span spanErr'}>{error.error}</span>
                    )
                )
        }
    }
    return (
        <>
            <form>
                {props.fields.map((obj, index) => {
                    const Component = fields[obj.type];
                    return <div key={index} className="formBuilder">
                        {/*<span>{obj.name}</span>*/}
                        <Component className="component" {...obj} onChange={onChange}/>
                        <div className="errors">{renderErrors(obj, valid)}</div>
                    </div>
                })}
                <FuncButton onClick={(e) => {
                    setSubmitClicked(true);
                    if (!valid.filter((obj) => obj.valid === false).length)
                        props.submit(e, state);
                }} name={'submit'}/>
            </form>
        </>
    )
}


export default FormBuilder;
