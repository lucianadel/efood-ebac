import styled from "styled-components";
import heroBackground from "../../images/fundo.png";

export const HeroSection = styled.section`
  position: relative;
  height: 384px;
  width: 100%;
  background-color: rgba(230, 103, 103, 0.05);
  background-image: url(${heroBackground});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: -24px 0 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(230, 103, 103, 0.05);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 48px 16px 64px;
    margin-top: 0;
    max-width: 100%;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const HeroLogo = styled.img`
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 57.5px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin: 0 auto 32px;
    display: block;
  }
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100% - 32px);
  height: 84px;
  margin: 0;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin: 24px auto 0;
    height: auto;
  }
`;
