import { restaurants } from "../../services/data";
import RestaurantCard from "../RestaurantCard";
import * as S from "./styles";

export default function RestaurantList() {
  return (
    <S.Section>
      <S.Container>
        <S.Grid>
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} restaurant={item} />
          ))}
        </S.Grid>
      </S.Container>
    </S.Section>
  );
}

