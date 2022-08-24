import {
  ApplaudBtn,
  ApplaudBtnText,
  ApplaudCounter,
  CommentBox,
  CommentBoxFooter,
  CommentBoxHeader,
  CommentBoxHeaderContent,
  CommentContent,
  CommentedAt,
  Container,
  DelComment,
  UserInfo,
  UserName,
  UserPicture,
} from './styles';

import { RiDeleteBin2Line } from 'react-icons/ri';
import { Avatar } from '../Avatar';

export const Comment = () => {
  return (
    <Container>
      <UserPicture>
      <Avatar
          url="https://github.com/xdouglas90.png"
          userProfile="#"
        />
      </UserPicture>

      <CommentBox>
        <CommentBoxHeader>
          <CommentBoxHeaderContent>
            <UserInfo>
              <UserName>Douglas Oliveira</UserName>
              <CommentedAt
                dateTime="2022-08-19 06:11:30"
                title="08 de Agosto às 06:11"
              >
                Cerca de 30min atrás
              </CommentedAt>
            </UserInfo>

            <DelComment title="Deletar comentário">
              <RiDeleteBin2Line />
            </DelComment>
          </CommentBoxHeaderContent>
          <CommentContent>Muito bom Douglas, parabéns!! 🎉</CommentContent>
        </CommentBoxHeader>

        <CommentBoxFooter>
          <ApplaudBtn>
            <ApplaudBtnText>👏 Aplaudir</ApplaudBtnText>
          </ApplaudBtn>
          <ApplaudCounter>0</ApplaudCounter>
        </CommentBoxFooter>
      </CommentBox>
    </Container>
  );
};
