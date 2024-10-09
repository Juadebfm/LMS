import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedCurrency = localStorage.getItem("currency");
    const savedLanguage = localStorage.getItem("language");
    if (savedCurrency) setCurrency(savedCurrency);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  const updateCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
    // Here you would typically call a function to update pricing across your app
  };

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Here you would typically call a function to change the app's language
  };

  return (
    <AppContext.Provider
      value={{ currency, language, updateCurrency, updateLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
