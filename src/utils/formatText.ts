const formatText = (text: string) => {
  const symbolsRemoved = text.replace(/["._,-]/g, ' ');

  const threeWords = symbolsRemoved.split(' ', 3).join(' ');

  const capitalizeFirstLetter =
    threeWords.charAt(0).toUpperCase() + threeWords.slice(1);
  return capitalizeFirstLetter;
};

export default formatText;
