import React, { useState } from "react";

import ReactPageScroller from "react-page-scroller";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("dark");
  const [currentPage, setCurrentPage] = useState(null);

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  const handlePageChange = (number) => {
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
        >
          <LandingPage
            toggleTheme={toggleTheme}
            theme={theme}
            onClick={handlePageChange}
          />
          <Projects theme={theme} onClick={handlePageChange} />
          <AboutMe theme={theme} />
        </ReactPageScroller>
      </>
    </ThemeProvider>
  );
}

export default App;
