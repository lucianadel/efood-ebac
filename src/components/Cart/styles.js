import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 32px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 520px;
  overflow-y: auto;
  padding-right: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: none;
  background: #ffebd9;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;

  &:focus {
    outline: 2px solid #ffd2ac;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: #ffebd9;
  font-size: 16px;
  font-weight: 700;
`;

export const InfoText = styled.p`
  margin: 0;
  color: #ffebd9;
  font-size: 14px;
  line-height: 1.4;
`;

export const Item = styled.div`
  background: #ffebd9;
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 8px;
  padding: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.span`
  font-size: 18px;
  font-weight: 900;
`;

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TrashIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 24px;
  background: #ffebd9;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 24px;
  border: 1px solid #ffebd9;
  background: transparent;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: #ffebd9;
  font-size: 12px;
`;

export const Empty = styled.p`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
