import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
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
  );
};
