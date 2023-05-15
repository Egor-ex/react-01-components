import p from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img src={avatar} alt="User avatar" className={p.avatar} />
        <p className={p.name}>{name}</p>
        <p className={p.tag}>@{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.statItem}>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{stats.followers}</span>
        </li>
        <li className={p.statItem}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{stats.views}</span>
        </li>
        <li className={p.statItem}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name: 'Username',
  stats: { followers: 0, views: 0, likes: 0 },
};

export default Profile;
