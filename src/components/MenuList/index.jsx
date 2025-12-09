import * as S from "./styles";

export default function MenuList({ menu }) {
  return (
    <S.Section>
      <S.Container>
        <S.Grid>
          {menu.map((item) => (
            <S.Card key={item.id}>
              <S.Image src={item.image} alt={item.name} />
              <S.Content>
                <S.Name>{item.name}</S.Name>
                <S.Desc>{item.description}</S.Desc>
                <S.Price>R$ {item.price.toFixed(2)}</S.Price>
                <S.Button>Adicionar</S.Button>
              </S.Content>
            </S.Card>
          ))}
        </S.Grid>
      </S.Container>
    </S.Section>
  );
}
