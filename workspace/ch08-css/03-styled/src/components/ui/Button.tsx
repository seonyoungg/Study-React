import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
  variant?: 'basic' | 'cancel' | 'confirm';
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) => props.bg || '#d4008e'};
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
  transition: all 0.3s;

  &:hover {
    background-color: #ac0072;
  }

  h3 {
    color: red;
  }

  img {
  }

  div {
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const ConfirmButtonStyle = styled(BasicButtonStyle)`
  background-color: #002ca5;
  color: #fff;

  &:hover {
    background-color: #001c69;
  }
`;

const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: #dee2e6;
  color: #222;

  &:hover {
    background-color: #58595a;
  }
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
