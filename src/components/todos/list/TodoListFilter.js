import classNames from 'classnames';

import { FILTER_STATUS } from '../../../hooks/todolistfilter.hooks';

const TodoListFilter = ({ displayOptions, dispatch }) => {
  const filterByStatus = (status = 'all') => {
    dispatch({
      type: FILTER_STATUS,
      payload: { status },
    });
  };

  return (
    <div className="flex text-slate-400">
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500':
            displayOptions.matches.completed === undefined,
        })}
        onClick={() => filterByStatus('all')}
      >
        All
      </div>
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500':
            displayOptions.matches.completed === false,
        })}
        onClick={() => filterByStatus('todo')}
      >
        To Do
      </div>
      <div
        className={classNames('w-[100px] cursor-pointer text-center text-lg', {
          'border-b-4 border-blue-500 font-bold text-blue-500':
            displayOptions.matches.completed === true,
        })}
        onClick={() => filterByStatus('done')}
      >
        Done
      </div>
    </div>
  );
};

export default TodoListFilter;
