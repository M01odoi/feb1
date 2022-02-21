import { getValue } from '@testing-library/user-event/dist/utils';
import { login } from '../../routes';

const FuncSelect = (props) => {

  const option = props.options.map((obj, i) => {
    return <option key={i} value={obj.value?obj.value:obj} label={obj.label?obj.label:obj}>
      {obj.label?obj.label:obj}</option>
  })
  return (<div className="line">
      {props.name}
      <select name={props.name} placeholder={props.placeholder} required={props.required}
              onChange={(e) => props.onChange(e, props.name, props.field)}>
        {option}
      </select>
    </div>
  )
}
export default FuncSelect;