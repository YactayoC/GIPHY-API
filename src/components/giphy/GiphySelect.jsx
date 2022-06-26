import { useAtom } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxiosGif } from '../../hooks/useAxiosGifs';
import { infoCategory } from '../../store/stateCategory';
import { GifGridSelect } from '../ui/GifGridSelect';
import { Navbar } from '../ui/Navbar';

export const GiphySelect = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useAtom(infoCategory);
  const { image, isLoading } = useAxiosGif(id);

  const onSetNewCategory = value => {
    setCategory(value.toLowerCase());
    navigate('/', { replace: true });
  };

  return (
    <>
      <Navbar onNewCategory={value => onSetNewCategory(value)} />
      <div className="container">
        <h3 className="grid__heading">{image.title}</h3>
        {isLoading && <h2 className="grid__loading">Cargando..</h2>}

        <div className="grid__selected">
          <img className="grid__selected-img" src={image.url} alt="" />
          <GifGridSelect category={category} quantity={4} />
        </div>
      </div>
    </>
  );
};
