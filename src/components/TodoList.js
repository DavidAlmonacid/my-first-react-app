import '../styles/components/TodoList.min.css';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, setTodos, loading, error }) => {
  const completeTodo = (index, done) => {
    const newTodos = [...todos];
    newTodos[index].done = !done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todoList'>
      <p className='todoList__status'>
        {error && 'There was an error, please reload.'}
        {loading && !error && 'Loading your tasks.'}
        {!loading && !todos.length && !error && 'Create a new task.'}
      </p>

      {todos.map((todo, index) => (
        <TodoItem
          text={todo.text}
          done={todo.done}
          id={index + 1}
          key={index}
          onComplete={() => completeTodo(index, todo.done)}
          handleDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};
