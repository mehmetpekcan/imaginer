"use client";
import styles from "./styles.module.scss";

function Tag({ title, onClick }) {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <button onClick={handleClick} className={styles.tag}>
      {title}
    </button>
  );
}

export { Tag };
