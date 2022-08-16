import React, {useEffect} from "react";

type Mode = "light" | "dark";

export function useTheme() {
  const [currentTheme, setCurrentTheme] = React.useState<Mode>("light");
  const [save, setSave] = React.useState<any>(null);

  const toggleTheme = React.useCallback((newTheme: Mode) => {
    setCurrentTheme(newTheme);
    if (!save) return;
    save(newTheme);
 
  }, []);

  function isLightTheme<T>(arg1: T, arg2: T) {
    return currentTheme === "light" ? arg1 : arg2;
  }


  useEffect(() => {
    const fade = setTimeout(() => {

      function getTheme(): Mode {
        return (localStorage.getItem("ui-theme") as Mode);
      }

      function saveTheme(theme: Mode) {
        localStorage.setItem("ui-theme", theme ? theme.toString() : "light");
      }

      setSave(saveTheme);

      setCurrentTheme(getTheme);
    }, 3000)

    return () => clearTimeout(fade);

  }, []);

  return { currentTheme, toggleTheme, isLightTheme };
}