import { Button } from '../Button';
import {
  Cover,
  Footer,
  Profile,
  SidebarContainer,
  SocialLinks,
  SocialLinksItem,
  UserName,
  UserRole,
} from './styles';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { Avatar } from '../Avatar';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Cover src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" />

      <Profile>
        <Avatar
          url="https://github.com/xdouglas90.png"
          hasBorder={true}
          userProfile="#"
        />
        <UserName>Douglas Oliveira</UserName>
        <UserRole>Web Developer Jr.</UserRole>
        <SocialLinks>
          <SocialLinksItem
            href="https://github.com/xdouglas90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </SocialLinksItem>
          <SocialLinksItem
            href="https://linkedin.com/in/odouglas-oliveira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </SocialLinksItem>
          <SocialLinksItem
            href="https://twitter.com/odouglas_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </SocialLinksItem>
          <SocialLinksItem
            href="https://instagram.com/odouglas_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </SocialLinksItem>
        </SocialLinks>
      </Profile>

      <Footer>
        <Button href="#" isPrimary={true}>
          <BiEditAlt /> Editar seu perfil
        </Button>
      </Footer>
    </SidebarContainer>
  );
};
