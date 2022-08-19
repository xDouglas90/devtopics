import styled from 'styled-components';

interface ButtonProps {
  type: 'primary' | 'secondary';
}

export const Button = styled.a<ButtonProps>`
  background: ${({ type }) =>
    type === 'primary' ? 'transparent' : 'var(--primary-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  color: ${({ type }) =>
    type === 'primary' ? 'var(--primary-color)' : 'var(--white-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 180px;

  &:hover {
    background: ${({ type }) =>
    type === 'primary' ? 'var(--primary-color)' : 'var(--primary-lt-color)'};
    color: var(--white-color);
    cursor: pointer;
    text-shadow: 0 0 2px var(--gray-800);
  }
`;
