import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

const todos = [
  { text: 'Hacer almuerzo', completed: false },
  { text: 'Barrer', completed: false },
  { text: 'Tender camas', completed: false },
  { text: 'Estudiar React', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <CreateTodoButton />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={crypto.randomUUID()} text={todo.text} />
        ))}
      </TodoList>
    </>
  );
}

export default App;
