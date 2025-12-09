import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  const openRestaurant = () => {
    navigate(`/restaurante/${restaurant.id}`);
  };

  return (
    <S.Card>
      <S.Cover src={restaurant.image} alt={restaurant.name} />
      <S.Content>
        <S.TopRow>
          <S.Category>{restaurant.category}</S.Category>
          <S.Rating>{restaurant.rating.toFixed(1)} ★</S.Rating>
        </S.TopRow>

        <S.Name>{restaurant.name}</S.Name>
        <S.Description>{restaurant.description}</S.Description>

        <S.Button onClick={openRestaurant}>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  );
}


