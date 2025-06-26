import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
  variant?: 'basic' | 'cancel' | 'confirm';
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) => props.bg || '#222'};
  border: none;
  color: ${(props) => props.color || '#fff'};
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

const ConfirmButtonStyle = styled(BasicButtonStyle)`
  background-color: '#002ca5';
  color: '#fff';
`;

const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: '#dee2e6';
  color: '#222';
`;

function Button({ children, variant = 'basic', ...rest }: ButtonProps) {
  switch (variant) {
    case 'cancel':
      return <CancelButtonStyle {...rest}>{children}</CancelButtonStyle>;
    case 'confirm':
      return <ConfirmButtonStyle {...rest}>{children}</ConfirmButtonStyle>;
    default:
      return <BasicButtonStyle {...rest}>{children}</BasicButtonStyle>;
  }
}

export default Button;
