import type React from 'react';
import './Button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps) {
  return (
    // <button type={type} className={className} .....>
    //   {children}
    // </button>
    <button className={`button bg-${bg}-text-${color}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
