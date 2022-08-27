import { Post, Sidebar } from '../../components';
import { PostsSection, Wrapper } from './styles';

export const Home = ():void => {
  return (
    <Wrapper>
      <Sidebar />
      
      <PostsSection>
        <Post />
        <Post />
      </PostsSection>
    </Wrapper>
  );
};
