import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: `aqua` }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
