import TrashIcon from '../assets/trash-icon.svg';

export const TodoItem = ({ text, completed, id }) => {
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    const name = document.querySelector(`.todo__name${id}`);
    name.style.textDecoration = checked ? 'line-through' : 'none';

    const title = (e.target.title = `Mark as ${checked ? 'un' : ''}done`);
    return title;
  };

  return (
    <div className='todo__task'>
      <label
        className={`todo__name${id} ${
          completed ? 'todo__name--completed' : ''
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
          title='Mark as done'
          onChange={handleCheckboxChange}
        />

        <button className='todo__delete' type='button' title='Delete task'>
          <img src={TrashIcon} alt='Trash icon' />
        </button>
      </div>
    </div>
  );
};
