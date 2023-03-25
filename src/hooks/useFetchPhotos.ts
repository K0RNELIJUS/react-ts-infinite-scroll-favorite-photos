import { useState, useEffect } from 'react';
import formatText from '../utils/formatText';
import { useSessionStorage } from './useSessionStorage';
import { PhotoProps } from './type';

const useFetchPhotos = (pageNumber: number) => {
  // State
  const [data, setData] = useSessionStorage('gallery', []);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [lastPage, setLastPage] = useState<boolean>(false);

  // API endpoint parameters
  const apiKey = import.meta.env.VITE_API_KEY as string;
  const searchTag = 'art';
  const photosPerPage = 20;

  const ENDPOINT = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTag}&per_page=${photosPerPage}&page=${pageNumber}&format=json&nojsoncallback=1&extras=owner_name&orientation=landscape`;

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(ENDPOINT);
        const data = await res.json();

        const photos = data.photos.photo.map((photo: PhotoProps) => {
          const titleFormated =
            photo.title === '' ? 'No Title' : formatText(photo.title);

          const ownerNameFormated =
            photo.ownername === '*_*' || ''
              ? 'Author Unknown'
              : formatText(photo.ownername);
          //  _n longest img edge 320px, _z longest img edge 640px, _b longest img edge 1024px
          const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
          const urlsByImgSize = {
            sm: `${url}_n.jpg`,
            md: `${url}_z.jpg`,
            lg: `${url}_b.jpg}`,
          };
          // Create an object for each photo with the relevant properties
          return {
            id: photo.id,
            title: titleFormated,
            ownername: ownerNameFormated,
            url: urlsByImgSize,
          };
        });

        setData((prevPhotos: PhotoProps[]) => {
          // Filter out photos that are present in the previous photos array
          const filteredPhotos = photos.filter(
            (photo: PhotoProps) => !prevPhotos.some((p) => p.id === photo.id)
          );
          return [...prevPhotos, ...filteredPhotos];
        });

        let isLastPage = data.photos.page === data.photos.pages;
        setLastPage(isLastPage);
        setIsLoading(false);
      } catch (error) {
        setError('Oops, something went wrong...');
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, [pageNumber]);
  return { data, isLoading, error, lastPage };
};

export default useFetchPhotos;
