import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/constants";
import GlobalStyle from "./styles/globalStyle";
import { Grid, Header, Overview, Platforms, Background } from "./components/";
import Data from "./content/data.json";
import { useDarkMode } from "./utils/useDarkMode";

function App() {
  const [theme, handleThemeToggle, mounted] = useDarkMode();

  const themeType = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={themeType}>
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
