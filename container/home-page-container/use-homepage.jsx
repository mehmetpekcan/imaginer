"use client";
import React, { useState, createContext, useContext, useMemo } from "react";

const HomepageContext = createContext();

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [resultPrompt, setResultPrompt] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const changePrompt = (newPrompt) => setPrompt(newPrompt);

  const copyPrompt = (copiedPrompt) => {
    changePrompt(copiedPrompt);
    window.scrollTo(0, 0);
  };

  const generateImage = async () => {
    setSubmitting(true);
    setImage(null);
    setResultPrompt("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error(response.statusText ?? response.status);

      const generatedImage = await response.json();

      setError(null);
      setResultPrompt(prompt);
      setImage(generatedImage);
    } catch (error) {
      setError(error);
    }

    setSubmitting(false);
  };

  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      isSubmitting,
      copyPrompt,
      generateImage,
      image,
      resultPrompt,
      error,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSubmitting, prompt, image, resultPrompt, error]
  );

  return (
    <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
  );
};

export const useHomepage = () => {
  const context = useContext(HomepageContext);
  return context;
};
