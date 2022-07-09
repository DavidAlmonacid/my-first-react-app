import './styles/css/App.css';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { CreateTodo } from './components/CreateTodo';
// import { useState } from 'react';

export const defaultTodos = [
  { text: 'Hacer almuerzo', completed: !false },
  { text: 'Barrer', completed: false },
  { text: 'Tender camas', completed: false },
  { text: 'Estudiar React', completed: false },
];

export const App = () => {
  return (
    <section className='todo'>
      <TodoHeader />
      <CreateTodo />
      <TodoList todos={defaultTodos} />
    </section>
  );
};
