import { useField } from 'formik';
import classNames from 'classnames';

const InputField = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <>
      <input
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

export default InputField;
