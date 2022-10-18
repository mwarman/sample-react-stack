import classNames from 'classnames';

const TodoListFilter = ({ filterBy, setFilterBy }) => {
  return (
    <div className="flex text-slate-400">
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === undefined,
        })}
        onClick={() => setFilterBy({})}
      >
        All
      </div>
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === false,
        })}
        onClick={() => setFilterBy({ completed: false })}
      >
        To Do
      </div>
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === true,
        })}
        onClick={() => setFilterBy({ completed: true })}
      >
        Done
      </div>
    </div>
  );
};

export default TodoListFilter;
