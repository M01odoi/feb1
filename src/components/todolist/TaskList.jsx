import { useContext, useEffect } from 'react';
import { ToDoContext } from '../../api/ToDoContext';
import FuncCheckbox from '../formBuilder/FuncCheckbox';
import FuncButton from '../formBuilder/FuncButton';
import '../../pages/todoList/todolist.css'
import Task from './Task';


const TaskList = () => {
  const [todoContext, setTodoContext] = useContext(ToDoContext);
  const onClickDelete = (e, key) => {
    e.preventDefault();
    setTodoContext(todoContext.filter((elem,index)=>index!==key));
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
      <Task todoContext={todoContext} onClickDelete={onClickDelete}/>
      </tbody>
    </table> :
      <h2>No more tasks!</h2>}
  </div>;
}
export default TaskList;