import { Container, PostContent, PostFooter, PostHeader } from './styles';

import { TbShare, TbBrandTelegram, TbBrandWhatsapp } from 'react-icons/tb';
import { FcLike } from 'react-icons/fc';
import { RiDislikeLine } from 'react-icons/ri';

export const Post = () => {
  return (
    <Container>
      <PostHeader>
        <div>
          <a href="#">
            <img src="https://github.com/xdouglas90.png" />
          </a>
          <div>
            <a href="#">
              <strong>Douglas Oliveira</strong>
            </a>
            <span>Web Developer Jr.</span>
          </div>
        </div>

        <time dateTime="2022-08-19 06:11:30" title="08 de Agosto às 06:11">
          Publicado há 1h
        </time>
      </PostHeader>

      <PostContent>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            jane.design/doctorcare
          </a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </PostContent>

      <PostFooter>
        <div>
          <span>Reagir:</span>
          <div>
            <a>
              <span>Amei</span>
              <FcLike />
            </a>
            <strong>0</strong>
          </div>
          <div>
            <a>
              <span>Odiei</span>
              <RiDislikeLine />
            </a>
            <strong>0</strong>
          </div>
        </div>

        <div>
          <span>Compartilhe:</span>
          <div>
            <a href="#" data-tooltip="Telegram">
              <TbBrandTelegram />
            </a>
            <a href="#" data-tooltip="WhatsApp">
              <TbBrandWhatsapp />
            </a>
            <a href="#" data-tooltip="Copiar link">
              <TbShare />
            </a>
          </div>
        </div>
      </PostFooter>
    </Container>
  );
};
