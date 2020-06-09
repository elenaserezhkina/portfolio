import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("dark");

  // The function that toggles between themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <LandingPage toggleTheme={toggleTheme} theme={theme} />

      <AboutMe theme={theme} />

      <Projects theme={theme} />
    </ThemeProvider>
  );
}

export default App;
