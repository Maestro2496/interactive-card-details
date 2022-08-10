import {useField} from "formik";
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CustomInput = ({className, ...props}) => {
  const [field, meta] = useField(props);
  const fieldError = meta.touched && meta.error;
  return (
    <>
      <input
        {...field}
        {...props}
        className={clsx(
          className,
          fieldError
            ? " border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-indigo-600 focus:ring-indigo-600"
        )}
      />
      {fieldError ? <div className="text-xs text-red-500 mt-1 h-1">{meta.error}</div> : null}
    </>
  );
};

export default CustomInput;
