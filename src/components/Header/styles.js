import styled from "styled-components";

export const HeaderBar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px 0; /* Aumentei a altura igual ao Figma */
`;

export const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 16px;
  
  /* No Figma, tudo fica alinhado verticalmente */
`;

export const Logo = styled.h1`
  font-size: 32px;       /* Igual ao Figma */
  font-weight: 700;      /* Peso forte */
  color: #fff;
  cursor: pointer;
`;

export const Nav = styled.nav`
  font-size: 18px;
  font-weight: 500;
`;

export const NavLink = styled.a`
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
