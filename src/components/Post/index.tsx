import {
  Author,
  AuthorInfos,
  AuthorName,
  AuthorRole,
  CommentBtn,
  CommentField,
  CommentForm,
  CommentFormFooter,
  CommentsList,
  Container,
  DislikeBtn,
  DisLikeCounter,
  Label,
  LikeBtn,
  LikeCounter,
  PostContent,
  PostContentLink,
  PostContentText,
  PostFooter,
  PostFooterAction,
  PostFooterActionItem,
  PostFooterContainer,
  PostFooterShare,
  PostFooterShareLink,
  PostHeader,
  PostPublishedAt,
} from './styles';

import { TbShare, TbBrandTelegram, TbBrandWhatsapp } from 'react-icons/tb';
import { FcLike } from 'react-icons/fc';
import { RiDislikeLine } from 'react-icons/ri';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

export const Post = () => {
  return (
    <Container>
      <PostHeader>
        <Author>
          <Avatar
            url="https://github.com/xdouglas90.png"
            userProfile="#"
          />
          <AuthorInfos>
            <AuthorName>Douglas Oliveira</AuthorName>
            <AuthorRole>Web Developer Jr.</AuthorRole>
          </AuthorInfos>
        </Author>

        <PostPublishedAt
          dateTime="2022-08-19 06:11:30"
          title="08 de Agosto às 06:11"
        >
          Publicado há 1h
        </PostPublishedAt>
      </PostHeader>

      <PostContent>
        <PostContentText>Fala galeraa 👋</PostContentText>
        <PostContentText>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </PostContentText>
        <PostContentText>
          👉{' '}
          <PostContentLink href="#" target="_blank" rel="noopener noreferrer">
            jane.design/doctorcare
          </PostContentLink>
        </PostContentText>

        <PostContentText>
          <PostContentLink href="#">#novoprojeto</PostContentLink>{' '}
          <PostContentLink href="#">#nlw</PostContentLink>{' '}
          <PostContentLink href="#">#rocketseat</PostContentLink>
        </PostContentText>
      </PostContent>

      <PostFooter>
        <PostFooterContainer>
          <PostFooterAction>Reagir:</PostFooterAction>
          <PostFooterActionItem>
            <LikeBtn>
              Amei
              <FcLike />
            </LikeBtn>
            <LikeCounter>0</LikeCounter>
          </PostFooterActionItem>
          <PostFooterActionItem>
            <DislikeBtn>
              Odiei
              <RiDislikeLine />
            </DislikeBtn>
            <DisLikeCounter>0</DisLikeCounter>
          </PostFooterActionItem>
        </PostFooterContainer>

        <PostFooterContainer>
          <PostFooterAction>Compartilhe:</PostFooterAction>
          <PostFooterShare>
            <PostFooterShareLink data-tooltip="Telegram">
              <TbBrandTelegram />
            </PostFooterShareLink>
            <PostFooterShareLink data-tooltip="WhatsApp">
              <TbBrandWhatsapp />
            </PostFooterShareLink>
            <PostFooterShareLink data-tooltip="Copiar link">
              <TbShare />
            </PostFooterShareLink>
          </PostFooterShare>
        </PostFooterContainer>
      </PostFooter>

      <CommentForm>
        <Label>Deixe seu feedback:</Label>
        <CommentField name="comment" placeholder="Deixe um comentário" />
        <CommentFormFooter>
          <CommentBtn type="submit">Publicar</CommentBtn>
        </CommentFormFooter>
      </CommentForm>

      <CommentsList>
        <Comment />
        <Comment />
        <Comment />
      </CommentsList>
    </Container>
  );
};
