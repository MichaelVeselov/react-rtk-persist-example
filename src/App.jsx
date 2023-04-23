import { NewTodo } from './features/Todos/NewTodo';
import { Filter } from './features/Filters/Filter';
import { TodoList } from './features/Todos/TodoList';
import { ResetApp } from './features/Reset/ResetApp';

export default function App() {
  return (
    <div className='App'>
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filter />
      <TodoList />
      <ResetApp />
    </div>
  );
}
