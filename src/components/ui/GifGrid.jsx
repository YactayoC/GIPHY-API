import { GifItem } from './GifItem';
import { useAxiosGifs } from '../../hooks/useAxiosGifs';

export const GifGrid = ({ category, quantity }) => {
  const { images, isLoading } = useAxiosGifs(category, quantity);

  return (
    <div className="grid__content container">
      {category && <h3 className="grid__heading">Results for: {category}</h3>}
      {isLoading && <h2>Cargando..</h2>}

      <div className="grid__list">
        {(images.length == 0 && category !== "") && (
          <div className="grid__list-notfound">
            <img src="https://c.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif" alt="" />
            <p>No results found</p>
          </div>
        )}
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
