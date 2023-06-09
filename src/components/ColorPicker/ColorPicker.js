import s from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            className={s.option}
            style={{ backgroundColor: option.color }}
            key={option.label}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
