const Button = ({ children, className, outline, ...props }) => {
  let cssClasses = outline
    ? "text-[18px] font-bold border-2 border-indigo-500 px-7 py-1 rounded-md text-indigo-500 hover:text-indigo-500 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-75"
    : "text-[18px] font-bold border-indigo-500 px-7 py-1 rounded-md bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 hover:border-indigo-500 border-2 transition ease-in-out delay-75";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
