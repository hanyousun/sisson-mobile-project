import clsx from "clsx";

function Input({ type, placeholder, className, variant = "default", size = "default", ...props }) {
  const variants = {
    default: "text-bgColor-1 placeholder-bgColor-3 focus:outline-none focus:border-primary-1",
    dark: "bg-bgColor-8 placeholder-whColor-6 focus:outline-none focus:border-primary-1",
  };
  const sizes = {
    default: "h-14 w-full px-6",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        "rounded-full border border-transparent ",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export default Input;
