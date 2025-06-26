import type React from 'react';
import styles from './Button.module.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps) {
  return (
    // <button type={type} className={className} .....>
    //   {children}
    // </button>
    <button className={`${styles.button} ${styles[`bg-${bg}-text-${color}`]}`} {...rest}>
      {children}
    </button>
  );
}
export default Button;
