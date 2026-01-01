import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

export const Dialog = styled.div`
  position: relative;
  width: 1024px;
  max-width: 100%;
  height: 344px;
  background: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px 32px 32px 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    height: auto;
    grid-template-columns: 1fr;
    padding-top: 48px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  align-self: center;

  @media (max-width: 900px) {
    width: 100%;
    height: 240px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin: 0;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 0;
  color: #fff;
`;

export const Serves = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const AddButton = styled.button`
  width: 218px;
  height: 24px;
  background: #ffebd9;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  border-radius: 0;
`;
