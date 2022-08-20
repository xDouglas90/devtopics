import { AvatarLink, AvatarPicture } from './styles';

interface AvatarProps {
  url: string;
  hasBorder?: boolean;
  userProfile: string;
}

export const Avatar = ({ url, hasBorder, userProfile }: AvatarProps) => {
  return (
    <AvatarLink href={userProfile}>
      <AvatarPicture src={url} hasBorder={hasBorder} />
    </AvatarLink>
  );
};
