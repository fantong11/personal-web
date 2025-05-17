import React from "react";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={className ? `${styles.navbar} ${className}` : styles.navbar}
    >
      {navItems.map((item) => (
        <div key={item.id}>
          <button className={styles.title} onClick={() => handleClick(item.id)}>
            {item.label}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
