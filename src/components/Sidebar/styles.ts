import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: var(--gray-700);
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 1px 15px 0 var(--primary-lt-color);
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
  margin-top: -2.85rem;
`;

export const UserName = styled.strong`
  color: var(--white-color);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6;
`;

export const UserRole = styled.span`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SocialLinksItem = styled.a`
  color: var(--gray-300);
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--primary-color);
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1rem;
  padding: 1.5rem 2rem 2rem;
`;
