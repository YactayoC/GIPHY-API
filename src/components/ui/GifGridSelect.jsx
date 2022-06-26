import { GifItem } from './GifItem';
import { useAxiosGifs } from '../../hooks/useAxiosGifs';

export const GifGridSelect = ({ category, quantity }) => {
  const { images, isLoading } = useAxiosGifs(category, quantity);

  return (
    <>
      {isLoading && <h2>Cargando..</h2>}
      <div className="grid__list-selected">
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
