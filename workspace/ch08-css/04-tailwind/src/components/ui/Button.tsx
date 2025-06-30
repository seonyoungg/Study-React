interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // color?: string;
  bg?: 'gray' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
}

function Button({ children, bg = 'gray', size = 'md', ...rest }: ButtonProps) {
  const btnColor = {
    gray: 'bg-[#d3d3d3]',
    red: 'bg-[#f7b2ad]',
    yellow: 'bg-[#fce38a]',
  };

  const hoverColor = {
    gray: 'hover:bg-[#c0c0c0]',
    red: 'hover:bg-[#f29e9e]',
    yellow: 'hover:bg-[#f9db4a]',
  };

  const btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  };

  return (
    <button className={`${btnColor[bg]} border-0 text-[#222] mx-0.5 rounded-[2rem] cursor-pointer ${hoverColor[bg]} duration-300 ${btnSize[size]}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
