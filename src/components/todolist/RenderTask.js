import { useContext } from 'react';
import { ToDoContext } from '../../api/ToDoContext';

const RenderTask = () => {
  const [todoContext, setTodoContext] = useContext(ToDoContext);
  const table = <table>
    <thead>
    <tr>
      <th>Task</th>
      <th>Where</th>
      <th>When</th>
    </tr>
    </thead>
    <tbody>
    {todoContext.map((obj) => {
      console.log(obj);
      return <tr>
        <td>{obj.task}</td>
        <td>{obj.where}</td>
        <td>{obj.when}</td>
      </tr>
    })}
    </tbody>
  </table>
  console.log(todoContext);
  return <div>todo:
    {todoContext.length ? table : null}

  </div>;
}
export default RenderTask;