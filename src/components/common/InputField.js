import { useField } from "formik";
import classNames from "classnames";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <>
      <label htmlFor={props.id || props.name} className="text-slate-700">
        {label}
      </label>
      <input
        className={classNames(
          "mt-1 block w-full rounded-md border-slate-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-slate-100",
          {
            "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-200":
              showError,
          }
        )}
        {...field}
        {...props}
      />
      {showError ? (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputField;
