import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={`${s.status} ${isOnline && s.isOnline}`}></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.protoType = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
