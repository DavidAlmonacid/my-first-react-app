import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, setTodos }) => {
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
    <div className='todo__tasks'>
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
