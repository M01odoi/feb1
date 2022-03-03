import React from 'react';
import './login.css'
import {useNavigate} from 'react-router-dom';
import {home} from '../../routes';
import FormBuilder from '../../components/formBuilder/FormBuilder';
import {field} from './fields.ts';

const Login = (props: object) => {
    const navigate: Function = useNavigate();
    const submit = (e: React.ChangeEvent<HTMLInputElement>, state: object): void => {
        e.preventDefault();
        const user: object = state.reduce((acc, elem) => ({...acc, [elem.name]: elem.value}), {})
        if (props.api.signIn(user)) {
            props.api.signIn(user);
            navigate(home);
        }
    }

    return (<>
            <div className='form'>
                <h1>Sign in</h1>
                <FormBuilder fields={field} submit={submit}/>
            </div>
        </>
    )
}
export default Login;