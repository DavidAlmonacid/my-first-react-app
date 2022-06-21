const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

function TodoForm() {
  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <input className='todo__input' placeholder='Write your task' />
      <input className='todo__add' type='submit' value='+' />
    </form>
  );
}

export default TodoForm;
