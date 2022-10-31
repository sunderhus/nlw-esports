import { HelpSection, Logo, Slider } from "@/components"
import { useI18n } from "@/contexts/i18n"
import { Container,Content,GamerText,Title } from "./styles"

const Home: React.FC = () => {
  const {translate} = useI18n();

  const title = translate('MSG01').split('%');
  return (
    <Container>
      <Content>
        <Logo />
        <Title>{title[0]}{<GamerText>{translate('MSG02')}</GamerText>}{title[1]}</Title>
        <Slider />
      </Content>
      
      <HelpSection/>
    </Container>
  )
}

export default Home