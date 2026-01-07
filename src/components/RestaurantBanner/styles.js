import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  position: relative;
  height: 186px;
  width: 100%;
  margin: -23px 0 0;
  background-color: rgba(230, 103, 103, 0.05);
  background-image: ${({ backgroundPattern }) =>
    backgroundPattern ? `url(${backgroundPattern})` : "none"};
  background-repeat: repeat;
  background-size: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 32px 16px;
    margin-top: 0;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1366px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 900;
`;

export const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
`;

export const HeaderLogo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`;

export const HeaderCart = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 900;
`;

export const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  margin: 0;
  overflow: hidden;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const BannerContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 24px 170px;

  @media (max-width: 900px) {
    padding: 24px 24px 32px;
  }
`;

export const Category = styled.span`
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 38px;
  color: #fff;
`;

export const Name = styled.h1`
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  color: #fff;
  margin: 0 0 8px 0;
`;
