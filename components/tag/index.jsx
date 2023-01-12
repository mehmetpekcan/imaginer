"use client";
import styles from "./styles.module.scss";

function Tag({ title, onClick, className }) {
  const handleClick = () => {
    onClick?.(title);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.tag} ${className ?? ""}`}
    >
      {title}
    </button>
  );
}

export { Tag };
