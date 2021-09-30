import React, { createContext, useContext } from "react";
import "./Context.css";

const ThemeContext = createContext("light");

const ThemedButtonWrapper = () => {
  return (
    <div className="wrapper">
      <ThemedButton>initialThemeContext</ThemedButton>
      <ThemeContext.Provider value="dark">
        <ThemedButton>providedThemeContext</ThemedButton>
      </ThemeContext.Provider>
    </div>
  );
};

const ThemedButton = ({ children }) => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return <button className={theme}>{children}</button>;
};

export default ThemedButtonWrapper;
