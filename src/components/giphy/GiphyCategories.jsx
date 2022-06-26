import { useAtom } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';
import { infoCategory } from '../../store/stateCategory';
import { GifGridCategories } from '../ui/GifGridCategories';
import { Navbar } from '../ui/Navbar';

export const GiphyCategories = () => {
  const navigate = useNavigate();
  const {categories} = useParams();
  const [category, setCategory] = useAtom(infoCategory);

  const onSetNewCategory = value => {
    setCategory(value.toLowerCase());
    navigate('/', { replace: true });
  };

  return (
    <>
      <Navbar onNewCategory={value => onSetNewCategory(value)} />
      <GifGridCategories key={crypto.randomUUID()} category={categories} quantity={20} />
    </>
  );
};
