import * as S from "./styles";

export default function ProductModal({ item, onClose, onAdd }) {
  if (!item) return null;

  const handleAdd = () => {
    if (onAdd) {
      onAdd(item);
    }
  };

  return (
    <S.Overlay>
      <S.Dialog role="dialog" aria-modal="true" aria-label={item.name}>
        <S.CloseButton onClick={onClose} aria-label="Fechar modal">
          X
        </S.CloseButton>

        <S.Image src={item.image} alt={item.name} />

        <S.Content>
          <S.Title>{item.name}</S.Title>
          <S.Description>{item.description}</S.Description>
          <S.Serves>Serve: de 2 a 3 pessoas</S.Serves>
          <S.AddButton onClick={handleAdd}>
            Adicionar ao carrinho - R$ {item.price.toFixed(2)}
          </S.AddButton>
        </S.Content>
      </S.Dialog>
    </S.Overlay>
  );
}
