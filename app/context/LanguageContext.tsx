"use client";

import { createContext, useContext, useState } from "react";

type Lang = "zh" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
}>({
  lang: "zh",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  const toggleLang = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
