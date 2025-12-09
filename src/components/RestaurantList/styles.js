import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff5ee;
  padding: 48px 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px 16px 24px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

export const Price = styled.span`
  font-weight: bold;
  margin-bottom: 16px;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #e66767;
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
`;
