import './styles/css/App.css';
import { TodoHeader } from './components/TodoHeader';
import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

export const App = () => {
  // const defaultTodos = [
  //   { text: 'Hacer almuerzo', done: !false },
  //   { text: 'Barrer', done: false },
  //   { text: 'Tender camas', done: false },
  //   { text: 'Estudiar React', done: false },
  // ];
  const localStorageVersion = 'TODOS_V1';
  // localStorage.setItem(localStorageVersion, JSON.stringify(defaultTodos));
  const localStorageTodos = localStorage.getItem(localStorageVersion);

  let parsedTodos = [];
  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    localStorage.setItem(localStorageVersion, JSON.stringify(parsedTodos));
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [value, setValue] = useState('');

  const doneTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!value) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(value.toLowerCase())
    );
  }

  return (
    <section className='todo'>
      <TodoHeader
        completed={doneTodos}
        total={totalTodos}
        inputValue={value}
        setInputValue={setValue}
      />

      <CreateTodo />

      <TodoList
        todos={searchedTodos}
        setTodos={setTodos}
        locVer={localStorageVersion}
      />
    </section>
  );
};
