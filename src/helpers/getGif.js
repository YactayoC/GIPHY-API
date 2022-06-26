import axios from 'axios';

export const getGifByID = async id => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=zp2FicCzU0ntgo4FYT7YHf45cDdXNWLj`;
  const { data } = await axios(url);
  const result = data.data;

  return {
    id: result.id,
    title: result.title,
    url: result.images.downsized_medium.url,
    display_name: result.user?.display_name
  };

};
