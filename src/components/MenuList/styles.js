import styled from "styled-components";

export const Section = styled.section`
  padding: 56px 0;
  background-color: #fff5ee; /* fundo bege igual ao Figma */
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas igual ao Figma */
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* responsivo */
  }
`;

export const Card = styled.div`
  background-color: #ffffff; /* card deve ser branco, igual ao Figma */
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px; /* maior e igual ao Figma */
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Name = styled.h3`
  font-size: 20px;  /* igual ao Figma */
  font-weight: 700;
  margin-bottom: 12px; /* mais espaço */
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const Price = styled.p`
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
`;
