export const TodoSearch = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type='search'
      className='todo__input'
      placeholder='Search a task'
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
