import './styles/css/App.css';
import TodoCounter from './components/TodoCounter';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const todos = [
  { text: 'Hacer almuerzo', completed: false },
  { text: 'Barrer', completed: false },
  { text: 'Tender camas', completed: false },
  { text: 'Estudiar React', completed: false },
];

function App() {
  return (
    <section className='todo'>
      <TodoCounter />
      <TodoForm />
      <div className='todo__tasks'>
        {todos.map((todo, index) => (
          <TodoItem text={todo.text} id={index + 1} key={index} />
        ))}
      </div>
    </section>
  );
}

export default App;
