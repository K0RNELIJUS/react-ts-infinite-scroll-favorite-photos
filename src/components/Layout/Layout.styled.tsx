import styled from 'styled-components';
import BREAKPOINTS from '../../constants/breakpoints';

export const LayoutStyled = styled.main`
  height: 100%;
  background-color: #e7e7e7;
`;

export const ContainerStyled = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 30px 30px;
  }
`;
