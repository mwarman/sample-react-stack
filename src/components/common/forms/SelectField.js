import { useField } from 'formik';
import classNames from 'classnames';

const SelectField = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <>
      <select
        className={classNames(
          'mt-1 block w-full rounded-md focus:ring disabled:bg-slate-100 dark:bg-slate-900 dark:disabled:bg-slate-800',
          { 'border-slate-500/30 focus:border-indigo-300/50 focus:ring-indigo-200/50': !showError },
          {
            'border-pink-500/30 text-pink-600 focus:border-pink-500/50 focus:ring-pink-400/50':
              showError,
          },
          className,
        )}
        {...field}
        {...props}
      />
      {showError ? <div className="mt-1 text-sm text-red-600">{meta.error}</div> : null}
    </>
  );
};

export default SelectField;
