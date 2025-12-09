import { useParams } from "react-router-dom";
import { restaurants } from "../../services/data";
import RestaurantBanner from "../../components/RestaurantBanner";
import MenuList from "../../components/MenuList";

export default function Restaurante() {
  const { id } = useParams();

  const restaurant = restaurants.find((item) => item.id === Number(id));

  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>;
  }

  return (
    <>
      <RestaurantBanner 
        image={restaurant.capa} 
        name={restaurant.titulo} 
      />
      
      <MenuList menu={restaurant.menu} />
    </>
  );
}



