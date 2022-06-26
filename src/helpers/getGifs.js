import axios from 'axios';

export const getGifs = async (category, quantity) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=zp2FicCzU0ntgo4FYT7YHf45cDdXNWLj&q=${category}&limit=${quantity}`;
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
