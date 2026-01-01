import { useState } from "react";
import ProductModal from "../ProductModal";
import * as S from "./styles";

export default function MenuList({ menu, onAdd }) {
  const [added, setAdded] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAdd = (item) => {
    if (onAdd) {
      onAdd(item);
    }
    setAdded((prev) => ({ ...prev, [item.id]: true }));
    setSelectedItem(null);
    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [item.id]: false }));
    }, 3000);
  };

  return (
    <>
      <S.Section>
        <S.Container>
          <S.Grid>
            {menu.map((item) => {
              const isAdded = added[item.id];

              return (
                <S.Card key={item.id}>
                  <S.Image src={item.image} alt={item.name} />
                  <S.Content>
                    <S.Name>{item.name}</S.Name>
                    <S.Desc>{item.description}</S.Desc>
                    <S.Price>R$ {item.price.toFixed(2)}</S.Price>
                    <S.Button onClick={() => setSelectedItem(item)}>
                      {isAdded ? "Adicionado!" : "Adicionar ao carrinho"}
                    </S.Button>
                  </S.Content>
                </S.Card>
              );
            })}
          </S.Grid>
        </S.Container>
      </S.Section>

      <ProductModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAdd={handleAdd}
      />
    </>
  );
}
