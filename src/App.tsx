import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="green">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="orange">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
