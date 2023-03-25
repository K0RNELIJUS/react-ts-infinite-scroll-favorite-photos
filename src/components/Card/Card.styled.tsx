import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  height: 225px;

  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 0px 0px rgba(193, 193, 193, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OverlayStylded = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.125rem;

  margin: 60px 0 25px;

  & h4 {
    color: white;
    font-weight: 700;
  }

  & p {
    font-style: italic;
    color: white;
  }
`;

export const LineStyled = styled.div`
  width: 68px;
  border: 1px solid white;
  margin: 6px 0 2px 0;
`;
