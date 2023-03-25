import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './type';

const Button = ({ text, isFavorite, action }: ButtonProps) => {
  return (
    <ButtonStyled onClick={action} isFavorite={isFavorite}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
