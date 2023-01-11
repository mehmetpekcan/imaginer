import { Tag } from "../../../components/tag";
import { SUGGESTIONS } from "./constants";

import styles from "./styles.module.scss";

function PromptSuggestions({ suggestions = SUGGESTIONS }) {
  const selectSuggestion = (suggestion) => {
    // select it
  };

  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {suggestions.map(({ title, id }) => (
          <Tag key={id} title={title} onClick={selectSuggestion} />
        ))}
      </div>
    </div>
  );
}

export { PromptSuggestions };
