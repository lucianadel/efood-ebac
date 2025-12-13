import * as S from "./styles";
import logo from "../../images/logo.png";

export default function Hero() {
  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.HeroLogo src={logo} alt="efood" />
        <S.HeroTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HeroTitle>
      </S.HeroContent>
    </S.HeroSection>
  );
}
