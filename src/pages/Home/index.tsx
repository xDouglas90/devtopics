import { Post, Sidebar } from '../../components';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <section>
        <Post />
        <Post />
      </section>
    </Wrapper>
  );
};
