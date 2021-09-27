import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/constants";
import GlobalStyle from "./styles/globalStyle";
import { Grid, Header, Overview, Platforms } from "./components/";
import Data from "./content/data.json";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Grid>
          <Header data={Data} />
          <Platforms data={Data} />
          <Overview data={Data} />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
