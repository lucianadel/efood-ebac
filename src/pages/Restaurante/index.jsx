import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantBanner from "../../components/RestaurantBanner";
import MenuList from "../../components/MenuList";
import { getRestaurants } from "../../services/api";

export default function Restaurante() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getRestaurants()
      .then((data) => {
        if (!isMounted) return;
        const found = data.find((item) => item.id === Number(id));
        if (found) {
          setRestaurant(found);
        } else {
          setError("Restaurante não encontrado");
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Erro ao carregar restaurante");
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
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Carregando...</p>;
  }

  if (error || !restaurant) {
    return <p style={{ textAlign: "center" }}>{error || "Restaurante não encontrado"}</p>;
  }

  return (
    <>
      <RestaurantBanner restaurant={restaurant} />
      <MenuList menu={restaurant.menu || []} />
    </>
  );
}
