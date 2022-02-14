import { useContext, useState } from 'react';
import { ToDoContext } from '../../api/ToDoContext';
import FormBuilder from '../FormBuilder';
import { field } from './fields';
import Modal from './Modal';


const AddTask = (props) => {
  const [todoList, setTodoList] = useContext(ToDoContext);
  const [task,setTask] = useState({task:'',where:'',when:''});
  const submit = (e) => {
    e.preventDefault();
    // setTodoList([task])
    // props.api.addToList()
  }

  return (<>
      <button onClick={props.onClick}>Add Task</button>
      <Modal active={props.active} setActive={props.setActive}>
        <FormBuilder fields={field} submit={submit} state={task} setState={setTask}/>
      </Modal>
    </>
  )
}


export default AddTask;