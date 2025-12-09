import styled from "styled-components";

export const HeroSection = styled.section`
  background-image: url("https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg");
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  text-align: center;
  color: #fff;
`;

export const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.3;
`;

