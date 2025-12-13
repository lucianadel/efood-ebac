import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 56px 0 96px;
  background: #fff2e7;
  min-height: 1290px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  column-gap: 80px;
  row-gap: 48px;
  justify-content: center;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    column-gap: 32px;
  }
`;
