import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

