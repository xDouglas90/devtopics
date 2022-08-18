import devTopicsLogo from '../../assets/images/devtopics-logo.png';
import { Header, Logo, Title } from "./styles"

export const Topbar = () => {
  return (
    <Header>
        <Logo src={devTopicsLogo} alt="DevTopics logo branco" />
        <Title>&lt;DevTopics /&gt; </Title>
    </Header>
  )
}
