import * as S from "./styles";

export default function RestaurantBanner({ image, name }) {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <S.BannerContent>{name}</S.BannerContent>
    </S.Banner>
  );
}
