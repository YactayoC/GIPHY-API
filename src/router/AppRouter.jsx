import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GiphyCategories } from '../components/giphy/GiphyCategories';
import { GiphyHome } from '../components/giphy/GIphyHome';
import { GiphySelect } from '../components/giphy/GiphySelect';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiphyHome/>} />
        <Route path="/gif/:id" element={<GiphySelect/>} />
        <Route path="/categories/:categories" element={<GiphyCategories/>} />
      </Routes>
    </BrowserRouter>
  );
};
