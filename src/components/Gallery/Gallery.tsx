import { useRef, useState, useCallback } from 'react';
import useFetchPhotos from '../../hooks/useFetchPhotos';
import { GalleryStyled, ContainerStyled } from './Gallery.styled';
import Card from '../Card/Card';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { PhotoProps } from './type';

const Gallery = () => {
  // State to track the page number
  const [pageNumber, setPageNumber] = useState<number>(1);
  // Use session storage to store favorites
  const [favorites, setFavorites] = useSessionStorage<PhotoProps[]>(
    'favorites',
    []
  );
  // Fetch photos using custom hook
  const { data, isLoading, error, lastPage } = useFetchPhotos(pageNumber);
  // Create an IntersectionObserver to detect when the last photo is visible
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPhotoRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !lastPage) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, lastPage]
  );
  // Handle favorite button click
  const handleFavorite = (id: string) => {
    const newFavorites = [...favorites];
    const photoIndex = newFavorites.findIndex((photo) => photo.id === id);
    if (photoIndex === -1) {
      const photo = data.find((photo: PhotoProps) => photo.id === id);
      newFavorites.push(photo);
    } else {
      newFavorites.splice(photoIndex, 1);
    }
    setFavorites(newFavorites);
    sessionStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <>
      {isLoading && <ContainerStyled>Loading...</ContainerStyled>}
      {error && <ContainerStyled>{error}</ContainerStyled>}
      {data && (
        <GalleryStyled>
          {data?.map((photo: PhotoProps, index: number) =>
            data.length === index + 1 ? (
              <Card
                ref={lastPhotoRef}
                key={index}
                imgUrl={photo.url}
                id={photo.id}
                title={photo.title}
                ownerName={photo.ownername}
                favorites={favorites}
                handleFavorite={handleFavorite}
              />
            ) : (
              <Card
                key={index}
                imgUrl={photo.url}
                id={photo.id}
                title={photo.title}
                ownerName={photo.ownername}
                favorites={favorites}
                handleFavorite={handleFavorite}
              />
            )
          )}
        </GalleryStyled>
      )}
    </>
  );
};

export default Gallery;
