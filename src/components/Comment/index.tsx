import {
  ApplaudBtn,
  ApplaudBtnText,
  ApplaudCounter,
  Avatar,
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

export const Comment = () => {
  return (
    <Container>
      <UserPicture>
        <Avatar src="https://github.com/xdouglas90.png" />
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
