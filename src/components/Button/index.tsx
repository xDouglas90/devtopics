import { Button as Btn } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    isPrimary: boolean;
    href?: string;
}

export const Button = ({ children, isPrimary }: ButtonProps) => {
  return (
    <Btn isPrimary={isPrimary}>
      {children}
    </Btn>
  );
};
