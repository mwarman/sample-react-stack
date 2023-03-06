/**
 * The `ListHeader` React component.
 * @module components/common/lists/ListHeader
 */

/**
 * The `ListHeader` component renders the list column headings.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content. Typically one or more `ListColumn`.
 * @returns {JSXElement} JSX
 * @example
 *  <ListHeader>
 *    <ListColumn
 *      className="col-span-6 overflow-clip whitespace-nowrap"
 *      name="Summary"
 *      path="summary"
 *    />
 *    <ListColumn
 *      className="col-span-1 overflow-clip whitespace-nowrap"
 *      name="Status"
 *      path="statusObj.ordinal"
 *    />
 *  </ListHeader>
 */
const ListHeader = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 border-b-2 border-slate-light p-2 dark:border-slate-700">
      {children}
    </div>
  );
};

export default ListHeader;
