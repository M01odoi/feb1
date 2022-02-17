import { useContext, useEffect, useState } from 'react';
import { ToDoContext } from '../../api/ToDoContext';
import FormBuilder from '../formBuilder/FormBuilder';
import { field } from './fields';
import Modal from './Modal';


const AddTask = (props) => {
  const [todoList, setTodoList] = useContext(ToDoContext);
  // const [task, setTask] = useState({ task: '', where: '', when: '' });
  const submit = (e,state) => {
    e.preventDefault();
    console.log('state',state);
    const todo = state.reduce((acc, elem) => ({...acc,[elem.name]:elem.value}),{})
    props.setActive(false);
    setTodoList([...todoList,todo ]);
  }

  return (<>
      <button onClick={props.onClick}>Add Task</button>
      <Modal active={props.active} setActive={props.setActive}>
        <FormBuilder fields={field} submit={submit} />
      </Modal>
    </>
  )
}


export default AddTask;