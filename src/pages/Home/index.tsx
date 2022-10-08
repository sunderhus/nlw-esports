import { Logo, Slider } from "@/components"
import { Container,GamerText,Title } from "./styles"

const Home: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Title>Seu <GamerText>duo</GamerText> está aqui</Title>
    
      <Slider />
    </Container>
  )
}

export default Home