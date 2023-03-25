import styled from 'styled-components';
import BREAKPOINTS from '../../constants/breakpoints';

export const GalleryStyled = styled.div`
  width: fit-content;
  min-height: 100vh;
  margin: 0 auto;

  display: grid;
  gap: 20px;
  grid-template-columns: 300px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 300px);
    gap: 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(3, 300px);
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    grid-template-columns: repeat(4, 300px);
  }
`;

export const ContainerStyled = styled.p`
  width: 100%;
  text-align: center;
  padding: 16px;
`;
