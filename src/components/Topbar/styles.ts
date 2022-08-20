import styled from 'styled-components';

export const Header = styled.header`
  background: rgba(32, 32, 36, 0.8);
  box-shadow: 0 -10px 25px var(--primary-lt-color);
  -webkit-backdrop-filter: blur(1.5px);
  backdrop-filter: blur(1.5px); 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 3rem;
  width: auto;

  &:hover {
    box-shadow: 0 5px 32px 0 rgba(31, 38, 135, 0.37);
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;

  &:hover {
    text-shadow: 0 5px 32px rgba(31, 38, 135, 0.37);
  }
`;
