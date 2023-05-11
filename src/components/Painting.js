import defaultImage from '../logo.svg';
import PropTypes from 'prop-types';

export default function Painting(props) {
  //   console.log(props);

  const {
    imgUrl = defaultImage,
    title,
    profileUrl,
    author = 'не известно',
    price,
    quantity,
  } = props; //деструктуризация

  return (
    <div>
      <img src={imgUrl} alt={props.title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:<a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканичивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
