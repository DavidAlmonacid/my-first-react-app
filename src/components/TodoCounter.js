function TodoCounter({ completed, total }) {
  return (
    <header>
      <h3 className='todo__counter'>
        {completed} of {total} tasks completed
      </h3>
    </header>
  );
}

export default TodoCounter;
