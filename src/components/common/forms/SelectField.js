/**
 * The `SelectField` React component.
 * @module components/common/forms/SelectField
 */

import { useField } from 'formik';
import classNames from 'classnames';

/**
 * The `SelectField`  component renders a styled `select` element integrated
 * with the Formik library.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to
 * the select element.
 * @param {*} [props....props] Any additional properties added to the
 * select element.
 * @returns {JSXElement} JSX
 */
const SelectField = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <>
      <select
        className={classNames(
          'mt-1 block w-full rounded-md focus:ring disabled:bg-slate-100 dark:bg-slate-900 dark:disabled:bg-slate-dark',
          { 'border-slate/30 focus:border-indigo-light/50 focus:ring-indigo-light/70': !showError },
          {
            'border-red/30 text-red focus:border-red/50 focus:ring-red-light/50': showError,
          },
          className,
        )}
        {...field}
        {...props}
      />
      {showError ? <div className="mt-1 text-sm text-red">{meta.error}</div> : null}
    </>
  );
};

export default SelectField;
