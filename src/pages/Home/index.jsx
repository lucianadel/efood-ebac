import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import { getRestaurants } from "../../services/api";
import * as S from "./styles";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getRestaurants()
      .then((data) => {
        if (isMounted) {
          setRestaurants(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Erro ao carregar restaurantes");
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <S.Wrapper>
      <Hero />
      {loading && <p style={{ textAlign: "center" }}>Carregando...</p>}
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      {!loading && !error && <RestaurantList restaurants={restaurants} />}
    </S.Wrapper>
  );
}
