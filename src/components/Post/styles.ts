import styled from 'styled-components';

export const Container = styled.article`
  background: var(--gray-700);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2.5rem;
  width: 100%;

  & + & {
    margin-top: 2rem;
  }

  &:hover {
    box-shadow: 0 5px 32px 0 rgba(31, 38, 135, 0.37);
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      display: flex;
      flex-direction: column;

      > strong {
        color: var(--white-color);
        line-height: 1.6;
      }

      > span {
        color: var(--gray-500);
        font-size: 0.875rem;
      }
    }

    > a img {
      border: 4px solid var(--gray-800);
      border-radius: 8px;
      outline: 2px solid var(--primary-color);
      width: calc(4rem + 12px);
    }
  }

  time {
    color: var(--gray-500);
    font-size: 0.875rem;
  }
`;

export const PostContent = styled.div`
  line-height: 1.6;
  margin-top: 1.5rem;

  p {
    color: var(--gray-300);
    margin-top: 1rem;
    text-align: justify;

    a {
      color: var(--primary-color);
      font-weight: 700;
      text-decoration: none;

      &:hover {
        color: var(--primary-lt-color);
      }
    }
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

  div {
    display: flex;
    align-items: center;

    > span {
      color: var(--gray-500);
      font-size: 0.875rem;
      margin-right: 1rem;
    }

    div {
      margin-right: 1rem;
      position: relative;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-right: 0.5rem;
      }
    }

    div:last-child {
      margin-right: 0;
    }
  }

  div:last-child div a:hover {
    color: var(--primary-color);

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 1.8rem;
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
      bottom: 0.8rem;
      color: var(--primary-color);
      font-size: 1.7rem;
      font-weight: 700;
    }
  }
`;
