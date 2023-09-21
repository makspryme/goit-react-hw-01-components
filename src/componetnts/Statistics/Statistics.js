import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function isTitle({ title }) {
  if (title) {
    return <h2 className={css.title}>Upload stats</h2>;
  }
}

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {isTitle({ title })}

      <ul className={css.stat_list}>
        {stats.map(file => {
          return (
            <li className={css.item} key={file.id}>
              <span className={css.label}>{file.label}</span>
              <span className={css.percentage}>{file.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
