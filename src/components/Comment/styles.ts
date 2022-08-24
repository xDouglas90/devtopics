import styled from 'styled-components';

import { AvatarPicture } from '../Avatar/styles';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;

  ${AvatarPicture} {
    border: none;
    outline: none;
    height: 4rem;
    width: 4rem;
  }
`;

export const UserPicture = styled.a`
  height: fit-content;
  width: fit-content;
`;

export const CommentBox = styled.div`
  flex: 1;
`;

export const CommentBoxHeader = styled.header`
  background: var(--gray-600);
  border-radius: 8px;
  padding: 1rem;
`;

export const CommentBoxHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.strong`
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const CommentedAt = styled.time`
  color: var(--gray-400);
  font-size: 0.75rem;
  line-height: 1.6;
`;

export const CommentBoxFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const CommentContent = styled.p`
  color: var(--gray-300);
  line-height: 1.6;
  margin: 0.5rem 0;
`;

export const DelComment = styled.button`
  background: transparent;
  border-radius: 2px;
  color: var(--gray-100);
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 0;

  &:hover {
    color: var(--danger-color);
  }
`;

export const ApplaudBtn = styled.button`
  background: transparent;
  border: 0;
  border-radius: 2px;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0;
`;

export const ApplaudBtnText = styled.span`
  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const ApplaudCounter = styled.a`
  color: var(--gray-600);
  cursor: pointer;
`;
