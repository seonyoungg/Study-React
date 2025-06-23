import type React from 'react';

interface ButtonProps {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  onClick: (event: React.MouseEvent) => void;
  color?: string;
  textColor?: '#222' | '#fff';
}

function Button({ children, type, color, textColor, onClick: handleClick }: ButtonProps) {
  return (
    <>
      <button type={type} className='rounded-btn' onClick={handleClick} style={{ backgroundColor: color, color: textColor }}>
        {children}
      </button>
      <button>\</button>
    </>
  );
}

export default Button;
