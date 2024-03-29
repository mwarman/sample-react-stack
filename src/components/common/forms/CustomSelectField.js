/**
 * The `CustomSelectField` React component.
 * @module components/common/forms/CustomSelectField
 */

import { useState } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import find from 'lodash/find';
import reject from 'lodash/reject';

/**
 * The `CustomSelectField` component renders a `select` like input field with
 * customized `option` elements.
 *
 * The `options` parameter is an array of values and labels. The `value` is what is
 * stored in the form when selected. The `label` may be a string, a primitive, or JSX.
 *
 * Example `options`:
 * ```
 * const options = [{
 *    value='1',
 *    label='One'
 *  }, {
 *    value='2'
 *    label=<div>Two</div>
 *  }
 * ]
 * ```
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the select field.
 * @param {boolean} [props.disabled=false] Indicates if the field is in disabled state.
 * @param {name} props.name The field name, i.e. within the overall form.
 * @param {Object[]} [props.options=[]] The available options.
 * @param {string} props.placeholder The value to display when the field value is empty.
 * @returns {JSXElement} JSX
 * @example
 * <CustomSelectField
 *   className="my-3"
 *   disabled={isSubmitting}
 *   name="priority"
 *   placeholder="Select one"
 *   options={[{
 *     value='high',
 *     label=<div className="text-red">High</div>
 *   },{
 *     value='low',
 *     label=<div className="text-blue">Low</div>
 *   }]}
 * />
 */
const CustomSelectField = ({ className, disabled = false, name, options = [], placeholder }) => {
  const [isClosed, setIsClosed] = useState(true);
  // eslint-disable-next-line
  const [field, meta, helpers] = useField(name);

  const selectedOption = find(options, { value: meta.value });
  const availableOptions = reject(options, { value: meta.value });
  const showError = meta.touched && meta.error;

  const open = () => {
    if (!disabled) {
      setIsClosed(false);
      helpers.setTouched(true);
    }
  };

  const close = () => {
    setIsClosed(true);
  };

  const setValue = (value) => {
    if (!disabled) {
      helpers.setValue(value);
    }
  };

  return (
    <>
      {/* select field backdrop */}
      <div
        className={classNames('absolute top-0 left-0 z-40 h-screen w-screen', { hidden: isClosed })}
        onClick={close}
      ></div>
      {/* select field */}
      <div className="relative">
        {/* select field trigger */}
        <div onClick={open}>
          <div
            className={classNames(
              'mt-1 min-h-[42px] cursor-pointer rounded-md border py-2 px-3',
              { 'border-slate/30 focus:border-indigo-light/50': !showError },
              {
                'border-red/30 text-red focus:border-red/50': showError,
              },
              {
                'cursor-default bg-slate-100 dark:bg-slate-dark': disabled,
              },
              className,
            )}
          >
            {selectedOption?.label || placeholder}
          </div>
        </div>

        {/* select field errors */}
        {showError ? <div className="mt-1 text-sm text-red">{meta.error}</div> : null}

        {/* select field options */}
        <div
          className={classNames(
            'absolute top-12 left-0 z-50 min-w-full rounded border border-slate/30 bg-white py-1 shadow-md shadow-slate/50 dark:bg-slate-900',
            {
              hidden: isClosed,
            },
          )}
          onClick={close}
        >
          {availableOptions.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:cursor-pointer hover:bg-slate/20"
              onClick={() => setValue(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomSelectField;
