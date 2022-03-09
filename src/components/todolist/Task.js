import FuncCheckbox from '../formBuilder/FuncCheckbox.tsx';
import FuncButton from '../formBuilder/FuncButton.tsx';

const Task = (props) => {
  return props.todoContext.map((obj, index) => {
    return <tr key={index}>
      <td><FuncCheckbox type="checkbox"/></td>
      <td>{obj.task}</td>
      <td>{obj.where}</td>
      <td>{obj.when}</td>
      <td><FuncButton name="delete" onClick={(e) => props.onClickDelete(e, index)}/></td>
    </tr>
  })
}

export default Task;