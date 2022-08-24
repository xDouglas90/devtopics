import { AvatarLink, AvatarPicture } from './styles';

interface AvatarProps {
  url: string;
  userProfile: string;
}

export const Avatar = ({ url, userProfile }: AvatarProps) => {
  return (
    <AvatarLink href={userProfile}>
      <AvatarPicture src={url} />
    </AvatarLink>
  );
};
