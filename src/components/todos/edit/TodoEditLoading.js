/**
 * The `TodoEditLoading` React component.
 * @module components/todos/edit/TodoEditLoading
 */

import { Link } from 'react-router-dom';
import Placeholder from '../../common/Placeholder';

/**
 * The `TodoEditLoading` component renders a loading state placeholder
 * for display when the Todo to be edited is being fetched.
 * @function
 * @returns {JSXElement} JSX
 */
const TodoEditLoading = () => {
  return (
    <div>
      <div className="mb-4 flex items-center">
        <Link to="/todos">Todos</Link>
        <span className="ml-3">/</span>
        <Placeholder className="ml-3 h-5 w-1/12" />
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4">
        <div className="lg:col-span-2 2xl:col-span-3">
          <Placeholder className="h-4 w-32" />
          <Placeholder className="mb-4 mt-1 h-12 w-full" />

          <Placeholder className="h-4 w-32" />
          <Placeholder className="mb-4 mt-1 h-32 w-full" />
        </div>

        <div>
          <Placeholder className="h-4 w-32" />
          <Placeholder className="mb-4 mt-1 h-10 w-64" />

          <Placeholder className="h-4 w-32" />
          <Placeholder className="mb-4 mt-1 h-10 w-64" />

          <Placeholder className="h-4 w-32" />
          <Placeholder className="mb-4 mt-1 h-10 w-64" />
        </div>
      </div>
    </div>
  );
};

export default TodoEditLoading;
