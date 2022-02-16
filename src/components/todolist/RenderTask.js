import { useContext, useEffect } from 'react';
import { ToDoContext } from '../../api/ToDoContext';
import FuncCheckbox from '../formBuilder/FuncCheckbox';
import FuncButton from '../formBuilder/FuncButton';
import '../../pages/todoList/todolist.css'


const RenderTask = (props) => {
  const [todoContext, setTodoContext] = useContext(ToDoContext);
  const currentUser = JSON.parse(localStorage.getItem(props.currentUser));
  // useEffect(()=>{
  //   setTodoContext(todolist[0]);
  // },todolist)
  const onClickDelete = (e, key) => {
    e.preventDefault();
      setTodoContext([...todoContext.slice(0,key),...todoContext.slice(key+1,todoContext.length)]);
  }
  return <div>
    {todoContext.length ?
      <table className="table">
      <thead>
      <tr>
        <th>Done</th>
        <th>Task</th>
        <th>Where</th>
        <th>When</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {todoContext.map((obj, index) => {
        return <tr key={index}>
          <td><FuncCheckbox type="checkbox"/></td>
          <td>{obj.task}</td>
          <td>{obj.where}</td>
          <td>{obj.when}</td>
          <td><FuncButton name="delete" onClick={(e) => onClickDelete(e, index)}/></td>
        </tr>
      })}
      </tbody>
    </table> :
      <h2>No more tasks!</h2>}
  </div>;
}
export default RenderTask;