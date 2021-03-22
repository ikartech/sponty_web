import styled from "styled-components";

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 0rem 0 2rem;

  @media only screen and (max-width: 768px) {
    padding: 0rem 0 0rem;
  }
`;

export const Gradienttext = styled.section`
  background-color: #f3ec78;
  background-image: linear-gradient(#f9d2fd, #f25fff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
