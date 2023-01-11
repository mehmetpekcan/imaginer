import styles from "./styles.module.scss";

function Tag({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles.tag}>
      {title}
    </button>
  );
}

export { Tag };
