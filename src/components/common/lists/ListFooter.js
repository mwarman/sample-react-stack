/**
 * The `ListFooter` React component.
 * @module components/common/lists/ListFooter
 */

import classNames from 'classnames';

import { useListContext } from '../../../hooks/list.hooks';

import Icon from '../icons/Icon';

/**
 * The `ListFooter` component renders list status information at the bottom
 * of a page of items. This component integrates with the `ListContext` to
 * provide pagination controls.
 * @function
 * @param {Object} props The component properties.
 * @param {Object[]} [props.items=[]] The list items.
 * @returns {JSXElement} JSX
 * @example
 * <ListFooter items={list} />
 */
const ListFooter = ({ items = [] }) => {
  const { list, setPage } = useListContext();

  const totalPages = Math.ceil(items.length / list.pagination.size);
  const isFirstPage = list.pagination.page === 1;
  const isLastPage = list.pagination.page === totalPages;
  const firstItem = (list.pagination.page - 1) * list.pagination.size + 1;
  const lastItem = isLastPage ? items.length : list.pagination.page * list.pagination.size;
  const totalItems = items.length;

  const getPages = (max = 5) => {
    const pages = [];
    let page = list.pagination.page - Math.floor(max / 2);
    while (pages.length < Math.min(totalPages, max)) {
      if (page > 0 && page <= totalPages) {
        pages.push(page);
      }
      page++;
      if (page > totalPages) break;
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between border-t-2 border-slate-light p-2 text-sm dark:border-slate-700">
      {/* pagination summary */}
      <div>
        <span className="font-bold">
          {firstItem}-{lastItem}
        </span>{' '}
        of <span className="font-bold">{totalItems}</span>
      </div>
      {/* pagination controls */}
      <div className="ml-4 flex items-center">
        {!isFirstPage && (
          <Icon
            name="chevron-left"
            className="mr-2 cursor-pointer text-xs"
            title="Previous Page"
            onClick={() => setPage(list.pagination.page - 1)}
          />
        )}

        {getPages().map((page) => (
          <div
            key={page}
            className={classNames(
              'mr-2 last:mr-0',
              {
                'font-bold': page === list.pagination.page,
              },
              {
                'cursor-pointer': page !== list.pagination.page,
              },
            )}
            title={`Go to page ${page}`}
            onClick={() => setPage(page)}
          >
            {page}
          </div>
        ))}

        {!isLastPage && (
          <Icon
            name="chevron-right"
            className="cursor-pointer text-xs"
            title="Next Page"
            onClick={() => setPage(list.pagination.page + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default ListFooter;
