import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            quantity={item.quantity}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}
// значение id, key(ключя) обязательно для React(отслеживание элементов колекции), на самый верхний элемент колекции(внутри map())

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;
