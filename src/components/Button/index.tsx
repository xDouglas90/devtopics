import { Button as Btn } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    type: 'primary' | 'secondary';
    href?: string;
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <Btn type={type}>
      {children}
    </Btn>
  );
};
