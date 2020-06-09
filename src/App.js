import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  // The function that toggles between themes
  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("dark");
    }
    setComponentMounted(true);
  }, []);
  if (!componentMounted) {
    return <div />;
  }

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
