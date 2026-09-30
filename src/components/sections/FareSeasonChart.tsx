import type { FareLevel } from '@/lib/airline-details';
import styles from './FareSeasonChart.module.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LABEL: Record<FareLevel, string> = { low: 'Cheap', mid: 'Average', high: 'Expensive' };

/** 12-month fare-level bar chart (cheap / average / expensive). */
export function FareSeasonChart({ levels, caption }: { levels: FareLevel[]; caption: string }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.chart} role="img" aria-label={caption}>
        {levels.map((level, i) => (
          <div key={MONTHS[i]} className={styles.col}>
            <div className={styles.barArea}>
              <div
                className={`${styles.bar} ${styles[level]}`}
                style={{ animationDelay: `${i * 40}ms` }}
                title={`${MONTHS[i]}: ${LABEL[level]}`}
              />
            </div>
            <span className={styles.month}>{MONTHS[i]}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.legend}>
        <span>
          <i className={`${styles.swatch} ${styles.low}`} /> Cheap
        </span>
        <span>
          <i className={`${styles.swatch} ${styles.mid}`} /> Average
        </span>
        <span>
          <i className={`${styles.swatch} ${styles.high}`} /> Expensive
        </span>
        <span className={styles.captionText}>{caption}</span>
      </figcaption>
      {/* Accessible text alternative */}
      <div className="sr-only-text">
        <table>
        <caption>{caption}</caption>
        <tbody>
          {levels.map((level, i) => (
            <tr key={MONTHS[i]}>
              <th scope="row">{MONTHS[i]}</th>
              <td>{LABEL[level]}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </figure>
  );
}
