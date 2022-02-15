import React, { useEffect, useState } from 'react';
import AddTask from '../../components/todolist/AddTask';
import { ToDoContext } from '../../api/ToDoContext';
import RenderTask from '../../components/todolist/RenderTask';

const TodoList = (props) => {
  props.api.createToDoList(props.currentUser);
  const [todoList, setTodoList] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    if (todoList.length) {
      // props.api.addToList(props.currentUser, todoList);
      console.log(localStorage.getItem(props.currentUser));
    }
  }, [todoList]);

  return (<>
      <h1>TO DO</h1>
      <ToDoContext.Provider value={[todoList, setTodoList]}>
        <AddTask api={props.api} active={modalActive} setActive={setModalActive} onClick={() => {
          setModalActive(true)
        }}/>
        <div>TEXT</div>
        <RenderTask/>
      </ToDoContext.Provider>
      {/*<div>      {JSON.parse(localStorage.getItem(props.currentUser.login))}</div>*/}
    </>
  )
}

export default TodoList;