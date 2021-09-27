// A hook for implementing dark mode
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const setThemeType = (type) => {
    window.localStorage.setItem("theme", type);
    setTheme(type);
  };

  const handleThemeToggle = () => {
    if (theme === "light") {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setThemeType("dark");
    }
    setMounted(true);
  }, []);

  return [theme, handleThemeToggle, mounted];
};
