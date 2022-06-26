import axios from 'axios';

export const getGifsByCategory = async (category, quantity) => {
  const url = `https://api.giphy.com/v1/gifs/categories/${category}/${category}?api_key=zp2FicCzU0ntgo4FYT7YHf45cDdXNWLj&limit=${quantity}`;
  const { data } = await axios(url);
  const results = data.data;
  const gifs = results.map(result => {
    return {
      id: result.id,
      title: result.title,
      url: result.images.downsized_medium.url,
      display: result.user?.display_name,
    };
  });

  return gifs;
};
