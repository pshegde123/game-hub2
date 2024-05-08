import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="5"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="sm">
        <GridItem pl="2" area={"aside"} paddingY={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
