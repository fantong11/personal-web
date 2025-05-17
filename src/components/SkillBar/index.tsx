import React from "react";
import styles from "./SkillBar.module.scss";

interface SkillBarProps {
  label: string;
  percent: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percent }) => (
  <div className={styles.skillItem}>
    <span>{label}</span>
    <div className={styles.skillBar}>
      <div className={styles.skillProgress} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default SkillBar;
