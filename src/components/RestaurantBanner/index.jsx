import * as S from "./styles";

export default function RestaurantBanner({ image, name }) {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <S.TitleBar>
        <S.TitleContent>{name}</S.TitleContent>
      </S.TitleBar>
    </S.Banner>
  );
}

