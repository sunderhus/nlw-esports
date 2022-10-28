import { HelpSection, Logo, Slider } from "@/components"
import { Container,Content,GamerText,Title } from "./styles"

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Title>Seu <GamerText>duo</GamerText> está aqui</Title>
        <Slider />
      </Content>
      
      <HelpSection/>
    </Container>
  )
}

export default Home