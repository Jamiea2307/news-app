import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
      window.localStorage.setItem("theme", "Dark");
    } else {
      setTheme("Light");
      window.localStorage.setItem("theme", "Light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    localTheme
      ? setTheme(localTheme)
      : window.localStorage.setItem("theme", "Light");
  }, []);

  return [theme, toggleTheme];
};
