import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {login} from '../../routes';
import FormBuilder from '../../components/formBuilder/FormBuilder';
import {field} from './fields.ts';


const defaultValid: { [key: string]: string[] } = {
    name: [],
    email: [],
    password: [],
    confpass: []
}

export default function Signup(props) {
    const [validate, setValidate] = useState(defaultValid);
    const [sign, setSign] = useState({
        name: props.name || '',
        email: props.email || '',
        password: props.password || '',
        confpass: props.confpass || ''
    });
    const navigate: Function = useNavigate();

    const isValue = (validate: object): boolean => {
        let submit: boolean = false;
        for (const validateKey: number in validate) {
            if (validate[validateKey].filter((error) => !!error.error).length)
                submit = true;
        }
        return submit;
    }
    useEffect(() => {
        if (!isValue(validate) && sign.name) {
            console.log('Name: ' + sign.name + '\nEmail: ' + sign.email
                + '\nPassword: ' + sign.password + '\nConfirm password: ' + sign.confpass);
            setSign({name: '', email: '', password: '', confpass: ''});
            props.api.signUp(sign).then((user) => {
                navigate(login);
            });
        }
    }, [validate]);

    const validateAndSubmit: Function = (e: React.ChangeEvent<HTMLInputElement>, state:object):void => {
        e.preventDefault();
        const user:object = state.reduce((acc, elem) => ({...acc, [elem.name]: elem.value}), {})

        props.api.signUp(user).then(() => {
            navigate(login);
        });
    }

    return (
        <div className='form'>
            <h1>Sign up</h1>
            <FormBuilder fields={field} submit={validateAndSubmit}/>
        </div>
    )
}