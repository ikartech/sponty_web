import styled from "styled-components";

export const ImagesBlock = styled.section`
  position: relative;
  padding: 0 0 6rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
