import styles from "./styles.module.scss";

function PromptForm({ isSubmitting, onSubmit }) {
  return (
    <form className={styles.promptForm} onSubmit={onSubmit}>
      <textarea
        className={styles.promptTextarea}
        rows={2}
        type="text"
        placeholder="Prompt"
        name="prompt"
        required
      />
      <button
        className={styles.generateButton}
        type="submit"
        disabled={isSubmitting}
      >
        Generate
      </button>
    </form>
  );
}

export { PromptForm };
