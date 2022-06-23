import './styles/css/App.css';
import TodoCounter from './components/TodoCounter';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

const defaultTodos = [
  { text: 'Hacer almuerzo', completed: !false },
  { text: 'Barrer', completed: false },
  { text: 'Tender camas', completed: false },
  { text: 'Estudiar React', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [value, setValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <section className='todo'>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoForm inputValue={value} setInputValue={setValue} />

      <div className='todo__tasks'>
        {todos.map((todo, index) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            id={index + 1}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
