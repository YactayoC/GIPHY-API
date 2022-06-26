import {Link} from 'react-router-dom';

export const GifItem = ({ title, url, id }) => {
  return (
    <Link to={`/gif/${id}`} className="grid__item">
      <img src={url} alt="image" />
      <div className="grid__item-info">
          <p>{title}</p>
      </div>
    </Link>
  );
};
