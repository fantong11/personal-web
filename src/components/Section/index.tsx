import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
