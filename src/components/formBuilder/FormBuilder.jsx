import FuncInput from './FuncInput';
import FuncSelect from './FuncSelect';
import FuncCheckbox from './FuncCheckbox';
import FuncButton from './FuncButton';
import FuncDate from './FuncDate'
import validation from '../../validation';
import React, { useEffect, useState } from 'react';
import './formBuilder.css';

const FormBuilder = (props) => {
  const [state, setState] = useState(props.state || []);
  const [valid, setValid] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  useEffect(() => {
      const arr = props.fields.map((obj) => {
        return { name: obj.name, value: '' }
      })
      setState(arr);
  }, [])
  const fields = {
    select: FuncSelect,
    text: FuncInput,
    checkbox: FuncCheckbox,
    date: FuncDate,
  };
  const expectedValues = {
    confirmPassword: state.find((_) => _.name === 'newPassword'),
    // default: obj.validations.onChange.minLength, // вместо minLength: 8
  }
  const validate = () => {
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

  const onChange = (e, name, field) => {
    if (props.setState){
      props.setState({ ...props.state, [field]: e.target.value });
  }
    const newValue = state.map((obj) => {
      if (obj.name === name) {
        obj.value = e.target.value;
      }
      return obj;
    });
    setState(newValue);
  }
  useEffect(() => {
    if (state.length) {
      validate();
    }
  }, [state]);

  const renderErrors = (obj, field) => {
    const currentField = state.find((_) => _.name === obj.name);
    if (currentField && obj.validations)
      return field.filter(fieldObj => currentField.name === fieldObj.name).filter((error) => !!error.error)
        .map((error, index) => (
            <span key={index} className={submitClicked ? 'spanDef' : 'span spanErr'}>{error.error}</span>
          )
        )
  }
  return (
    <>
      <form>
        {props.fields.map((obj, index) => {
          const Component = fields[obj.type];
          return <div key={index} className="formBuilder">
            {/*<span>{obj.name}</span>*/}
            <Component className="component"  {...obj} onChange={onChange}/>
            <div className="errors">{renderErrors(obj, valid)}</div>
          </div>
        })}
        <FuncButton onClick={(e) => {
          setSubmitClicked(true);
          if (!valid.filter((obj) => obj.valid === false).length)
            props.submit(e,state);
        }} name={'submit'}/>
      </form>
    </>
  )
}


export default FormBuilder;
