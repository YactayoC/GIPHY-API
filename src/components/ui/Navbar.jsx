import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Link, useNavigate } from 'react-router-dom';
import { infoCategories, infoCategory } from '../../store/stateCategory';

export const Navbar = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const [, setCategory] = useAtom(infoCategory);
  const [, setCategories] = useAtom(infoCategories);
  const navigate = useNavigate();

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const onChangeCategories = e => {
    const categoriesNew = e.target.value
    setCategories(categoriesNew);
    setCategory(categoriesNew)
    navigate(`/categories/${categoriesNew}`, { replace: true });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <nav>
      <div className="nav container">
        <Link to="/" className="nav__logo">
          <p>GIPHY</p>
          <p>API</p>
        </Link>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__content">
            <div className="form__group">
              <input type="text" placeholder="Search your gifs favorites" value={inputValue} onChange={onInputChange} />
            </div>
            <button className="form__submit" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <select className="nav__select" defaultValue="categories" onChange={onChangeCategories}>
          <option value="categories" disabled>
            Categories
          </option>
          <option value="animals">Animals</option>
          <option value="actions">Actions</option>
          <option value="anime">Anime</option>
          <option value="cartoons">Cartoons</option>
          <option value="emotions">Emotions</option>
          <option value="gaming">Gaming</option>
          <option value="memes">Memes</option>
          <option value="clips">Clips</option>
        </select>
      </div>
    </nav>
  );
};
