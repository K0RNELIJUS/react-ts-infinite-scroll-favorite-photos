export type ButtonProps = {
  text: string;
  isFavorite: boolean | undefined;
  action: () => void;
};

export type ButtonStyledProps = {
  isFavorite: boolean | undefined;
};
