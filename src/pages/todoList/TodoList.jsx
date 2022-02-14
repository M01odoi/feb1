import React, { useEffect, useState } from 'react';
import AddTask from '../../components/todolist/AddTask';
import DeleteTask from '../../components/todolist/DeleteTask';
import { ToDoContext } from '../../api/ToDoContext';
import RenderTask from '../../components/todolist/RenderTask';
import Modal from '../../components/todolist/Modal';
import FormBuilder from '../../components/FormBuilder';
import { field } from '../../components/todolist/fields';

const TodoList = (props) => {
  props.api.createToDoList(props.currentUser);
  const [todoList, setTodoList] = useState([]);
const [modalActive,setModalActive] = useState(false);
  useEffect(()=>{
    console.log(1,todoList);
  },[todoList]);

  return (<>
      <h1>TO DO</h1>
      <ToDoContext.Provider value={[todoList, setTodoList]}>
        <AddTask api={props.api} active={modalActive} setActive={setModalActive} onClick={()=>{setModalActive(true)}}/>
        <RenderTask/>
      </ToDoContext.Provider>
      {/*<div>      {JSON.parse(localStorage.getItem(props.currentUser.login))}</div>*/}
    </>
  )
}

export default TodoList;