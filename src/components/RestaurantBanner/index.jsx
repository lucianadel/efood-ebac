import * as S from "./styles";
import logo from "../../images/logo.png";
import fundo from "../../images/fundo.png";

export default function RestaurantBanner({ restaurant, cartCount = 0 }) {
  return (
    <>
      <S.HeaderBar backgroundPattern={fundo}>
        <S.HeaderContent>
          <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
          <S.HeaderLogo src={logo} alt="efood" />
          <S.HeaderCart>
            {cartCount} produto(s) no carrinho
          </S.HeaderCart>
        </S.HeaderContent>
      </S.HeaderBar>

      <S.Banner style={{ backgroundImage: `url(${restaurant.image})` }}>
        <S.BannerOverlay />
        <S.BannerContent>
          <S.Category>{restaurant.category}</S.Category>
          <S.Name>{restaurant.name}</S.Name>
        </S.BannerContent>
      </S.Banner>
    </>
  );
}
