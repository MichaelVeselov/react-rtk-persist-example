import { useSelector, useDispatch } from 'react-redux';

import { removeTodo, toggleTodo, selectVisibleTodos } from './todoSlice';
import { selectActiveFilter } from '../Filters/filterSlice';

export const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}{' '}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
