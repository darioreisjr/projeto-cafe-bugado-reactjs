const Button = ({ children, onClick, style }) => {
  const defaultStyle = `  transition-all duration-200 w-52 h-16 mt-5 hover:bg-amster-700  text-[#DCD1BF] rounded-md`;
  return (
    <button className={`${defaultStyle} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
