"use client";
import { Tag } from "@/components/tag";
import { SUGGESTIONS } from "./constants";
import { useHomepage } from "../use-homepage";
import styles from "./styles.module.scss";

function PromptSuggestions({ suggestions = SUGGESTIONS }) {
  const { copyPrompt } = useHomepage();

  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {suggestions.map(({ title, id }) => (
          <Tag key={id} title={title} onClick={copyPrompt} />
        ))}
      </div>
    </div>
  );
}

export { PromptSuggestions };
