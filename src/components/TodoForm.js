function TodoForm({ inputValue, setInputValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <input
        className='todo__input'
        placeholder='Write your task'
        value={inputValue}
        onChange={handleInputChange}
      />
      <input className='todo__add' type='submit' value='+' title='Add task' />
    </form>
  );
}

export default TodoForm;
