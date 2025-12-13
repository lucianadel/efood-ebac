import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  const openRestaurant = () => {
    navigate(`/restaurante/${restaurant.id}`);
  };

  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Cover src={restaurant.image} alt={restaurant.name} />
        <S.Badges>
          {restaurant.highlight && <S.Badge>Destaque da semana</S.Badge>}
          <S.Badge>{restaurant.category}</S.Badge>
        </S.Badges>
      </S.ImageWrapper>
      <S.Content>
        <S.TopRow>
          <S.Name>{restaurant.name}</S.Name>
          <S.Rating>{restaurant.rating.toFixed(1)}</S.Rating>
        </S.TopRow>

        <S.Description>{restaurant.description}</S.Description>

        <S.Button onClick={openRestaurant}>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  );
}
