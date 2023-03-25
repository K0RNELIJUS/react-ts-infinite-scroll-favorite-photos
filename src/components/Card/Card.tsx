import { forwardRef, useState } from 'react';
import {
  CardStyled,
  OverlayStylded,
  WrapperStyled,
  LineStyled,
} from './Card.styled';
import Button from '../Button';
import { CardProps } from './type';

const Card = forwardRef(
  (
    { imgUrl, title, ownerName, favorites, id, handleFavorite }: CardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    // State to keep track of hover state
    const [isHovered, setIsHovered] = useState(false);
    // Function to toggle hover state
    const toggleHover = () => setIsHovered(!isHovered);
    // Text for the favorite button
    const btnTxt = favorites?.some((favorite) => favorite.id === id)
      ? 'Saved'
      : 'Favourite';
    // Boolean to check if the card is already favorited
    const isFavorite = favorites?.some((favorite) => favorite.id === id);

    return (
      <CardStyled
        ref={ref}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}>
        <img
          srcSet={`${imgUrl.sm} 1x, ${imgUrl.md} 2x , ${imgUrl.lg} 3x`}
          alt={title}
          loading='lazy'
        />
        {isHovered && (
          <OverlayStylded>
            <WrapperStyled>
              <h4>{title}</h4>
              <LineStyled />
              <p>{ownerName}</p>
              <div></div>
            </WrapperStyled>
            <Button
              text={btnTxt}
              isFavorite={isFavorite}
              action={() => handleFavorite(id)}
            />
          </OverlayStylded>
        )}
      </CardStyled>
    );
  }
);

export default Card;
