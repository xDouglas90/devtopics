import { Post, Sidebar } from '../../components';
import { PostsSection, Wrapper } from './styles';

export const Home = () => {
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
