import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Wrapper>
      <Hero />
      <RestaurantList />
    </S.Wrapper>
  );
}
