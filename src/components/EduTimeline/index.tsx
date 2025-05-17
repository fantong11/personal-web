import React from 'react';
import styles from './EduTimeline.module.scss';
import type { TimelineItem } from '../../types/timeline';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <div className={styles.eduTimeline}>
    {items.map((item, idx) => (
      <React.Fragment key={item.type === 'education' ? item.school : item.company + item.title}>
        {item.type === 'education' ? (
          <div className={styles.eduNode}>
            <div className={styles.eduDegree}>{item.degree}</div>
            <div className={styles.eduSchool}>{item.school}</div>
            <div className={styles.eduYear}>{item.year}</div>
          </div>
        ) : (
          <div className={styles.eduNode + ' ' + styles.expNode}>
            <div className={styles.expTitle}>{item.title}, {item.company} <span>{item.year}</span></div>
            <div className={styles.expTech}>{item.tech}</div>
            <ul className={styles.expDetails}>
              {(item.details as string[]).map((d: string, i: number) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}
        {idx < items.length - 1 && <div className={styles.eduLine}></div>}
      </React.Fragment>
    ))}
  </div>
);

export default Timeline;
