import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 24px 0;
  margin-top: 40px;
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  text-align: center;
  padding: 0 16px;
  font-size: 14px;
  line-height: 1.4;
`;
