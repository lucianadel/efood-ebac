import styled from "styled-components";

export const HeroSection = styled.section`
  height: 380px; /* Altura igual ao Figma */
  background-image: url("https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Overlay escuro */
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const HeroContent = styled.div`
  position: relative; /* Fica acima do overlay */
  max-width: 700px;   /* Igual ao Figma */
  text-align: center;
  padding: 0 16px;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;              /* Igual ao Figma */
  font-weight: 700;             /* Negrito */
  color: #fff;                  /* Branco */
  line-height: 1.3;
`;
