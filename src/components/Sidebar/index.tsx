import { Button } from '../Button';
import {
  Avatar,
  Cover,
  Footer,
  Profile,
  Sidebar as Aside,
  SocialLinks,
} from './styles';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';

export const Sidebar = () => {
  return (
    <Aside>
      <header>
        <Cover src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" />
      </header>

      <Profile>
        <Avatar src="https://github.com/xdouglas90.png" />
        <strong>Douglas Oliveira</strong>
        <span>Web Developer Jr.</span>
        <SocialLinks>
          <a
            href="https://github.com/xdouglas90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/odouglas-oliveira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/odouglas_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://instagram.com/odouglas_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </SocialLinks>
      </Profile>

      <Footer>
        <Button href="#" isPrimary={true}>
          <BiEditAlt /> Editar seu perfil
        </Button>
      </Footer>
    </Aside>
  );
};
