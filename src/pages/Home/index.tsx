import { Logo } from "@/components"
import { Container,GamerText,Title } from "./styles"

const Home: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Title>Seu <GamerText>duo</GamerText> está aqui</Title>
    </Container>
  )
}

export default Home