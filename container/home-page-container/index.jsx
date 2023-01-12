import { Examples } from "./examples";
import { PromptForm } from "./prompt-form";
import { PromptSuggestions } from "./prompt-suggestions";
import { ResultImage } from "./result-image";
import styles from "./styles.module.scss";

function HomePageContainer() {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>
        You just imagine,
        <br />
        we handle the rest
      </h1>
      <p className={styles.description}>
        Tell us a prompt and we&apos;ll generate a story for you.
      </p>
      <PromptForm />
      <ResultImage />
      <PromptSuggestions />
      <Examples />
    </div>
  );
}

export { HomePageContainer };
