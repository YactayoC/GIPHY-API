import { useEffect, useState } from 'react';
import { getGifByID } from '../helpers/getGif';
import { getGifs } from '../helpers/getGifs';
import { getGifsByCategory } from '../helpers/getGifsByCategory';

export const useAxiosGifs = (category, quantity) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const results = await getGifs(category, quantity);
    setImages(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export const useAxiosGifsCategories = (category, quantity) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const results = await getGifsByCategory(category, quantity);
    setImages(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
}

export const useAxiosGif = id => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const results = await getGifByID(id);
    setImage(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  }, [id]);

  return {
    image,
    isLoading,
  };
};
