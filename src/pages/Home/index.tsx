import { Post, Sidebar } from "../../components"
import { Wrapper } from "./styles"

export const Home = () => {
  return (    
    <Wrapper>
        <Sidebar />
        <Post />
    </Wrapper>
  )
}
