import TrashIcon from '../assets/trash-icon.svg';

export const TodoItem = ({ text, done, id, onComplete, handleDelete }) => {
  return (
    <div className='todo__task'>
      <label
        className={`todo__name${id} ${
          done ? 'todo__name--completed' : ''
        }`.trimEnd()}
        htmlFor={`todo-checkbox-${id}`}
      >
        {text}
      </label>

      <div className='todo__actions'>
        <input
          type='checkbox'
          className='todo__checkbox'
          id={`todo-checkbox-${id}`}
          title={`Mark as ${done ? 'un' : ''}done`}
          checked={done ? true : false}
          onChange={onComplete}
        />

        <button
          className='todo__delete'
          type='button'
          title='Delete task'
          onClick={handleDelete}
        >
          <img src={TrashIcon} alt='Trash icon' />
        </button>
      </div>
    </div>
  );
};
