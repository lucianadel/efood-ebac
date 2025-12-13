import { useState } from "react";
import * as S from "./styles";

export default function MenuList({ menu, onAdd }) {
  const [added, setAdded] = useState({});

  const handleAdd = (id) => {
    if (onAdd) onAdd();
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  return (
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
                  <S.Button onClick={() => handleAdd(item.id)}>
                    {isAdded ? "Adicionado!" : "Adicionar ao carrinho"}
                  </S.Button>
                </S.Content>
              </S.Card>
            );
          })}
        </S.Grid>
      </S.Container>
    </S.Section>
  );
}
