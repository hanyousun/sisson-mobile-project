import clsx from "clsx";

function Button({ variant = "default", size = "default", className = "", children, ...props }) {
  const variants = {
    default: "bg-transparent",
    primary: "bg-primary-1 text-white hover:bg-primary-8",
    outline: "border",
  };

  const sizes = {
    icon: "size-9",
    default: "h-9 px-4 py-2",
    sm: "h-7 rounded-md gap-1.5 px-3 text-sm",
    lg: "w-full h-14 font-bold rounded-full",
    sideIcon: "size-12",
  };

  return (
    <button className={clsx(variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
