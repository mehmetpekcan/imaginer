"use client";
import React, { useState, createContext, useContext, useMemo } from "react";

const HomepageContext = createContext();

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [resultPrompt, setResultPrompt] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);

  const changePrompt = (newPrompt) => setPrompt(newPrompt);

  const copyPrompt = (copiedPrompt) => {
    changePrompt(copiedPrompt);
    window.scrollTo(0, 0);
  };

  const generateImage = async () => {
    setSubmitting(true);
    setImage(null);
    setResultPrompt("");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const generatedImage = await response.json();

    setResultPrompt(prompt);
    setSubmitting(false);
    setImage(generatedImage);
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
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSubmitting, prompt, image, resultPrompt]
  );

  return (
    <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
  );
};

export const useHomepage = () => {
  const context = useContext(HomepageContext);
  return context;
};
