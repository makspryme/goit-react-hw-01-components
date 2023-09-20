import css from 'componetnts/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({ stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat_list}>
        {stats.map((file) => {
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
  stats: PropTypes.array.isRequired,
};
