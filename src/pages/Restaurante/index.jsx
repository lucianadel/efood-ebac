import { useParams } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../../services/data";
import RestaurantBanner from "../../components/RestaurantBanner";
import MenuList from "../../components/MenuList";

export default function Restaurante() {
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);

  const restaurant = restaurants.find((item) => item.id === Number(id));

  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>;
  }

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <>
      <RestaurantBanner restaurant={restaurant} cartCount={cartCount} />
      <MenuList menu={restaurant.menu || []} onAdd={handleAddToCart} />
    </>
  );
}
