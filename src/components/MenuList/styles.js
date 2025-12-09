import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px 16px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

export const Price = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
`;
