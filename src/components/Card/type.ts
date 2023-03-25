export type ImgUrls = {
  sm: string;
  md: string;
  lg: string;
};

export type Favorites = {
  id: string;
  ownername: string;
  title: string;
  url: ImgUrls;
};

export type CardProps = {
  imgUrl: ImgUrls;
  title: string;
  ownerName: string;
  favorites?: Favorites[];
  id: string;
  handleFavorite: (id: string) => void;
};
