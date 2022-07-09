import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { defaultTodos } from '../App';
import { useState } from 'react';

export const TodoHeader = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [value, setValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <header className='todo__header'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch inputValue={value} setInputValue={setValue} />
    </header>
  );
};
