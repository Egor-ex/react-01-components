import s from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>

    // без класса alert таак-как в стилях composes: alert;!!!!

    // <p role="alert" className={`${s.alert} ${s[type]}`}>
    //   {text}
    // </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
};

export default Alert;
