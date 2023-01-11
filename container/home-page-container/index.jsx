"use client";
import { useState } from "react";
import { Examples } from "./examples";
import { PromptForm } from "./prompt-form";
import { PromptSuggestions } from "./prompt-suggestions";
import styles from "./styles.module.scss";

function HomePageContainer() {
  const [isSubmitting, setSubmitting] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const prompt = formData.get("prompt");

    setSubmitting(true);

    // await fetch("/api/generate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ prompt }),
    // });

    setSubmitting(false);
    event.currentTarget.reset();
  };

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
      <PromptForm isSubmitting={isSubmitting} onSubmit={submitForm} />
      <PromptSuggestions />
      <Examples />
    </div>
  );
}

export { HomePageContainer };
