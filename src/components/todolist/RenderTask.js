import { useContext } from 'react';
import { ToDoContext } from '../../api/ToDoContext';

const RenderTask = () => {
  const [todoContext,setTodoContext] = useContext(ToDoContext);
  return <div>todo:{todoContext}</div>;
}
export default RenderTask;