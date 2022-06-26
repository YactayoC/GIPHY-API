import { useAtom } from 'jotai';

import { GifGrid } from '../ui/GifGrid';
import { Navbar } from '../ui/Navbar';
import { infoCategory } from '../../store/stateCategory';

export const GiphyHome = () => {
  const [category, setCategory] = useAtom(infoCategory);

  const onSetNewCategory = value => {
    setCategory(value.toLowerCase());
  };

  return (
    <>
      <Navbar onNewCategory={value => onSetNewCategory(value)} />
      <GifGrid key={crypto.randomUUID()} category={category} quantity={20} />
    </>
  );
};
