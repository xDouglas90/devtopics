import styled from 'styled-components';

export const Sidebar = styled.aside`
  background: var(--gray-700);
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 5px 32px 0 rgba(31, 38, 135, 0.37);
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: var(--white-color);
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  border: 4px solid var(--gray-800);
  border-radius: 8px;
  margin: -4rem 0 1rem;
  outline: 2px solid var(--primary-color);
  width: calc(6rem + 12px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (min-width: 768px) {
    margin: -2.75rem 0 1rem;
    width: calc(4rem + 12px);
  }
`;

export const SocialLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    color: var(--gray-300);
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1rem;
  padding: 1.5rem 2rem 2rem;
`;
