import { useContext, useEffect, useState } from 'react';
import { ToDoContext } from '../../api/ToDoContext';
import FormBuilder from '../formBuilder/FormBuilder';
import { field } from './fields';
import Modal from './Modal';


const AddTask = (props) => {
  const [todoList, setTodoList] = useContext(ToDoContext);
  const [task, setTask] = useState({ task: '', where: '', when: '' });
  const submit = (e,state) => {
    e.preventDefault();
    const user = state.reduce((acc, elem) => ({...acc,[elem.name]:elem.value}),{})
    console.log(user);
    props.setActive(false);
    setTodoList([ ...todoList, user ]);
    // props.api.addToList()
  }
  useEffect(() => {
    console.log([...todoList,task]);
  }, [task])
  return (<>
      <button onClick={props.onClick}>Add Task</button>
      <Modal active={props.active} setActive={props.setActive}>
        <FormBuilder fields={field} submit={submit} />
      </Modal>
    </>
  )
}


export default AddTask;