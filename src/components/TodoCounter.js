export const TodoCounter = ({ completed, total }) => {
  return (
    <h3 className='todo__counter'>
      {completed} of {total} tasks completed
    </h3>
  );
};
