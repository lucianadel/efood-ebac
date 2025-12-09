import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff5ee; /* Bege Figma */
  padding: 48px 0;
`;

export const Container = styled.div`
  max-width: 820px; /* largura exata do Figma */
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 360px); /* largura exata dos cards */
  justify-content: center; /* centraliza tudo */
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Card = styled.div`
  width: 360px; /* igual ao Figma */
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    width: 100%;
    max-width: 360px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px 16px 24px;
`;

export const Category = styled.span`
  font-size: 14px;
  color: #e66767;
  font-weight: 600;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  align-items: center;
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

export const Rating = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 12px 0 20px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  display: block;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
`;
