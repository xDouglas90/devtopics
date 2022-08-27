import { AvatarLink, AvatarPicture } from './styles';

interface AvatarProps {
  url: string;
  userProfile: string;
}

export const Avatar = ({ url, userProfile }: AvatarProps):void => {
  return (
    <AvatarLink href={userProfile}>
      <AvatarPicture src={url} />
    </AvatarLink>
  );
};
