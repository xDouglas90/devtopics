import styled from 'styled-components';

interface AvatarPictureProps {
  hasBorder?: boolean;
}

export const AvatarLink = styled.a`
  cursor: pointer;
`;

export const AvatarPicture = styled.img<AvatarPictureProps>`
  border: ${({ hasBorder }) =>
    hasBorder ? '4px solid var(--gray-800)' : '4px solid transparent'};
  border-radius: 8px;
  outline: ${({ hasBorder }) =>
    hasBorder ? '2px solid var(--primary-color)' : '2px solid transparent'};
  height: calc(4rem + 12px);
  width: calc(4rem + 12px);
`;
