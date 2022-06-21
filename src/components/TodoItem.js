import TrashIcon from '../assets/trash-icon.svg';

function TodoItem(props) {
  return (
    <div className='todo__task'>
      <label htmlFor={`todo-checkbox-${props.id}`}>{props.text}</label>

      <div className='todo__actions'>
        <input
          type='checkbox'
          className='todo__checkbox'
          id={`todo-checkbox-${props.id}`}
          title='Mark as done'
        />
        <button className='todo__delete' type='button'>
          <img src={TrashIcon} alt='Trash icon' />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
