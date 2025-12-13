import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  width: 472px;
  height: 398px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 217px;
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffebd9;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;
  height: 26px;
  padding: 0 10px;
  min-width: 61px;
  text-align: center;
`;

export const Content = styled.div`
  flex: 1;
  padding: 12px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  min-height: 181px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: "★";
    color: #ffb930;
    font-size: 18px;
    line-height: 1;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const Button = styled.button`
  align-self: flex-start;
  padding: 4px 12px;
  min-width: 82px;
  height: 24px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffebd9;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border-radius: 0;
`;
