import { useDispatch, useSelector } from "react-redux";
import { closeCart, removeItem } from "../../store/cartSlice";
import * as S from "./styles";

export default function Cart() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.Sidebar onClick={(event) => event.stopPropagation()}>
        {items.length === 0 ? (
          <S.Empty>Seu carrinho esta vazio.</S.Empty>
        ) : (
          <S.Items>
            {items.map((item) => (
              <S.Item key={item.cartId}>
                <S.ItemImage src={item.image} alt={item.name} />
                <S.ItemInfo>
                  <S.ItemName>{item.name}</S.ItemName>
                  <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>
                </S.ItemInfo>
                <S.RemoveButton
                  type="button"
                  onClick={() => dispatch(removeItem(item.cartId))}
                  aria-label={`Remover ${item.name} do carrinho`}
                >
                  <S.TrashIcon viewBox="0 0 448 512" aria-hidden="true">
                    <path d="M135.2 17.7C140.1 7.4 150.7 0 162 0h124c11.3 0 21.9 7.4 26.8 17.7L328 32h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8l-20.3 347.7c-1.8 30.8-27.2 55.3-58 55.3H118.3c-30.8 0-56.2-24.5-58-55.3L40 80h-8C18.7 80 8 69.3 8 56S18.7 32 32 32h88l15.2-14.3zM176 32l-7.2 8h110.4l-7.2-8H176zM120.8 432h206.4c5.5 0 10.1-4.4 10.4-9.9L356.4 80H91.6l18.8 342.1c0.3 5.5 4.9 9.9 10.4 9.9z" />
                  </S.TrashIcon>
                </S.RemoveButton>
              </S.Item>
            ))}
          </S.Items>
        )}

        <S.TotalRow>
          <span>Valor total</span>
          <span>R$ {total.toFixed(2)}</span>
        </S.TotalRow>
        <S.CheckoutButton type="button" disabled={items.length === 0}>
          Continuar com a entrega
        </S.CheckoutButton>
      </S.Sidebar>
    </S.Overlay>
  );
}
