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
 * @param {Object} props The component properties.
 * @returns JSX
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
              { 'border-slate-500/30 focus:border-indigo-300/50': !showError },
              {
                'border-pink-500/30 text-pink-600 focus:border-pink-500/50': showError,
              },
              {
                'cursor-default bg-slate-100 dark:bg-slate-800': disabled,
              },
              className,
            )}
          >
            {selectedOption?.label || placeholder}
          </div>
        </div>

        {/* select field errors */}
        {showError ? <div className="mt-1 text-sm text-red-600">{meta.error}</div> : null}

        {/* select field options */}
        <div
          className={classNames(
            'absolute top-12 left-0 z-50 min-w-full rounded border border-slate-500/30 bg-white py-1 shadow-md shadow-slate-500/50 dark:bg-slate-900',
            {
              hidden: isClosed,
            },
          )}
          onClick={close}
        >
          {availableOptions.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:cursor-pointer hover:bg-slate-500/20"
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
