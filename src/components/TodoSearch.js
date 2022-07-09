export const TodoSearch = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
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
