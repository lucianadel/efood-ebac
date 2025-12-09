import styled from "styled-components";

export const HeaderBar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 0;
`;

export const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 16px;
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const SubLogo = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

