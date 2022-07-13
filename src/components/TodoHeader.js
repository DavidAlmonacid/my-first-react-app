import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';

export const TodoHeader = ({ completed, total, inputValue, setInputValue }) => {
  return (
    <header className='todo__header'>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />
    </header>
  );
};
