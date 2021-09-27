import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/constants";
import GlobalStyle from "./styles/globalStyle";
import { Grid, Header, Overview, Platforms, Background } from "./components/";
import Data from "./content/data.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Background />
        <Grid>
          <Header data={Data} toggle={handleThemeToggle} />
          <Platforms data={Data} />
          <Overview data={Data} />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
