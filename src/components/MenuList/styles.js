import styled from "styled-components";

export const Section = styled.section`
  padding: 56px 0 72px;
  background-color: #fff2e7;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 24px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Card = styled.div`
  width: 320px;
  min-height: 338px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffebd9;
  display: flex;
  flex-direction: column;
  padding: 8px 8px 12px;

  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  align-self: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 0;
  color: #ffebd9;
`;

export const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffebd9;
  margin: 0;
`;

export const Price = styled.p`
  font-weight: 700;
  margin: 0;
  color: #ffebd9;
`;

export const Button = styled.button`
  width: 304px;
  height: 24px;
  align-self: center;
  background: #ffebd9;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  border-radius: 0;
  margin-top: auto;
`;
