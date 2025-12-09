import styled from "styled-components";

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px 16px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Category = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Rating = styled.span`
  font-weight: 700;
`;

export const Name = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 12px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
`;

