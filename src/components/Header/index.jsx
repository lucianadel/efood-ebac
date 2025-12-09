import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderBar>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo>efood</S.Logo>
        </Link>

        <S.Nav>
          <Link to="/"><S.NavLink>Restaurantes</S.NavLink></Link>
        </S.Nav>
      </S.HeaderContent>
    </S.HeaderBar>
  );
}

