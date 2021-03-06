import React, {useEffect, useState} from 'react';
import AddTask from '../../components/todolist/AddTask';
import {ToDoContext} from '../../api/ToDoContext';
import TaskList from '../../components/todolist/TaskList';

const TodoList: Function = (props: { api: object, currentUser: string }) => {
    props.api.createToDoList(props.currentUser);
    const currentTodoList:object = JSON.parse(localStorage.getItem(props.currentUser)).todolist;
    const [todoList, setTodoList] = useState(currentTodoList);
    const [modalActive, setModalActive] = useState(false);
    useEffect(() => {
        if (todoList.length) {
            props.api.addToList(props.currentUser, todoList);
        }
    }, [todoList]);

    return (<>
            <h1>To do list</h1>
            <ToDoContext.Provider value={[todoList, setTodoList]}>
                <div className='tasks'>
                    <AddTask api={props.api} active={modalActive} setActive={setModalActive} onClick={() => {
                        setModalActive(true)
                    }}/>
                    <TaskList/>
                </div>
            </ToDoContext.Provider>
            {/*<div>      {JSON.parse(localStorage.getItem(props.currentUser.login))}</div>*/}
        </>
    )
}

export default TodoList;