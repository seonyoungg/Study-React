import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) => props.bg || '#222'};
  border: none;
  color: ${(props) => props.color || 'white'};
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;
function Button({ children, bg, color, ...rest }: ButtonProps) {
  return <BasicButtonStyle {...rest}>{children}</BasicButtonStyle>;
}

export default Button;
