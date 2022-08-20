import styled from 'styled-components';

export const Container = styled.article`
  background: var(--gray-700);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  @media (min-width: 576px) {
    padding: 2.5rem;
  }

  & + & {
    margin-top: 2rem;
  }

  &:hover {
    box-shadow: 0 1px 15px 0 var(--primary-lt-color);
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.a`
  color: var(--white-color);
  cursor: pointer;
  line-height: 1.6;
  font-weight: 700;
`;

export const AuthorRole = styled.span`
  color: var(--gray-500);
  font-size: 0.875rem;
`;

export const PostPublishedAt = styled.time`
  color: var(--gray-500);
  font-size: 0.875rem;
`;

export const PostContent = styled.div`
  line-height: 1.6;
  margin-top: 1.5rem;
`;

export const PostContentText = styled.p`
  color: var(--gray-300);
  margin-top: 1rem;
  text-align: justify;
`;

export const PostContentLink = styled.a`
  color: var(--primary-lt-color);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`;

export const PostFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const PostFooterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PostFooterAction = styled.span`
  color: var(--gray-500);
  font-size: 0.875rem;
  margin-right: 1rem;
`;

export const PostFooterActionItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const PostFooterShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 0.5rem;
  width: fit-content;
`;

export const PostFooterShareLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;

  &:hover {
    color: var(--primary-color);

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 2.7rem;
      left: 2px;
      background: var(--primary-color);
      color: var(--white-color);
      border-radius: 8px;
      padding: 0.3rem;
      font-size: 0.875rem;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 0 2px var(--gray-800);
      width: 100px;
      z-index: 1;
    }

    &::before {
      content: '⤹';
      position: absolute;
      bottom: 1.3rem;
      color: var(--primary-color);
      font-size: 1.7rem;
      font-weight: 700;
    }
  }
`;

export const LikeBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;
  padding: 0;

  &:hover {
    color: var(--primary-color);
  }

  svg {
    filter: opacity(0.3);
  }
`;

export const DislikeBtn = styled(LikeBtn)``;

export const LikeCounter = styled.a`
  color: var(--gray-400);
`;

export const DisLikeCounter = styled(LikeCounter)``;

export const CommentForm = styled.form`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  width: 100%;

  &:focus-within footer {
    visibility: visible;
    max-height: 100%;
  }
`;

export const CommentFormFooter = styled.footer`
  visibility: hidden;
  max-height: 0;
`;

export const Label = styled.strong`
  color: var(--gray-100);
  line-height: 1.6;
  padding-left: 0.2rem;
`;

export const CommentField = styled.textarea`
  background: var(--gray-800);
  border: 0;
  border-radius: 8px;
  color: var(--gray-100);
  height: 6rem;
  line-height: 1.4;
  padding: 1rem;
  resize: none;
  width: 100%;

  &:hover {
    cursor: text;
  }
`;

export const CommentBtn = styled.button`
  background: var(--primary-lt-color);
  border: 0;
  border-radius: 8px;
  color: var(--white-500);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  text-shadow: 0 0 2px var(--gray-800);
  transition: background 0.2s;

  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
    text-shadow: none;
  }
`;

export const CommentsList = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
