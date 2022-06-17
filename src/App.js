import './App.css';
import TodoCounter from './components/TodoCounter';

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
      {/* <TodoSearch /> */}
      <input placeholder='Ahhhhhhhh' />
      {/* <TodoList> */}
      {/* {todos.map((todo) => (
          <TodoItem />
        ))} */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </>
  );
}

export default App;
