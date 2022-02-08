import FuncInput from './FuncInput';
import FuncSelect from './FuncSelect';
import FuncCheckbox from './FuncCheckbox';
import FuncButton from './FuncButton';
import validation from '../validation';
import { useEffect, useState } from 'react';

const FormBuilder = (props) => {
  const [state, setState] = useState([]);
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
    button: FuncButton
  };
  const validate = () => {
    props.fields.forEach((obj) => {
      const currentField = state.find((_) => _.name === obj.name)
      if (currentField.value && obj.validations) {
        for (const prop of obj.validations.onChange) {
          validation[prop.name](currentField.value, 'text');
        }
      }
    })
  }
  const onChange = (e, name) => {
    const newValue = state.map((obj) => {
      if (obj.name === name) {
        obj.value = e.target.value;
      }
      return obj;
    });
    setState(newValue);
  }
  useEffect(() => {
    if (state.length){
    validate();
    }
  }, [state])
  return (
    <form>
      {props.fields.map((obj, index) => {
        const Component = fields[obj.type];
        return <Component key={index} {...obj} onChange={onChange}/>
      })}
    </form>
  )
}


export default FormBuilder;
