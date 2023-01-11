"use client";
import React, { useState, createContext, useContext, useMemo } from "react";

const HomepageContext = createContext();

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const resetPromptState = () => {
    setPrompt("");
    setSubmitting(false);
  };

  const changePrompt = (newPrompt) => setPrompt(newPrompt);

  const copyPrompt = (copiedPrompt) => {
    changePrompt(copiedPrompt);
    window.scrollTo(0, 0);
  };

  const generateImage = async () => {
    setSubmitting(true);
    console.log("Inside generation", prompt);

    // await fetch("/api/generate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ prompt }),
    // });

    resetPromptState();
  };

  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      isSubmitting,
      copyPrompt,
      generateImage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSubmitting, prompt]
  );

  return (
    <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
  );
};

export const useHomepage = () => {
  const context = useContext(HomepageContext);
  return context;
};
