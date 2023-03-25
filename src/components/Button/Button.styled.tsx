import styled, { css } from 'styled-components';
import { ButtonStyledProps } from './type';

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  padding: 8px 20px;
  border-radius: 20px;

  font-size: 1rem;

  cursor: pointer;

  background-color: transparent;
  color: #fff;
  border: 0.5px solid rgba(219, 219, 219);

  &:hover {
    background-color: rgba(219, 219, 219, 0.4);
  }

  &:active {
    transform: scale(0.97);
    transition: all 0.2s ease-in-out;
  }

  ${({ isFavorite }) =>
    isFavorite &&
    css`
      background-color: #1e1b1b;
      color: #fff;

      &:hover {
        border-color: #b5b5b5;
        color: #fff;
      }
    `}
`;
