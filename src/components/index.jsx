import * as S from "./styles";
import { Link } from "react-router-dom";

export default function RestaurantList({ restaurants }) {
  return (
    <S.Section>
      <S.Container>
        <S.Grid>
          {restaurants.map((item) => (
            <S.Card key={item.id}>
              <S.Image src={item.image} alt={item.name} />

              <S.Info>
                <S.Category>{item.category}</S.Category>

                <S.TitleRow>
                  <S.Name>{item.name}</S.Name>
                  <S.Rating>{item.rating} ★</S.Rating>
                </S.TitleRow>

                <S.Description>{item.description}</S.Description>

                <Link to={`/restaurante/${item.id}`}>
                  <S.Button>Saiba mais</S.Button>
                </Link>
              </S.Info>
            </S.Card>
          ))}
        </S.Grid>
      </S.Container>
    </S.Section>
  );
}
