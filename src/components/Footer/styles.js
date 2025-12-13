import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 298px;
  background: #ffebd9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 48px 16px 56px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`;

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SocialItem = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  max-width: 480px;
  text-align: center;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffebd9;
`;
