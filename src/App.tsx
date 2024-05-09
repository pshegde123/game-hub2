import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchTextValue, setSearchTextValue] = useState<string>("");

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
        <NavBar
          onSearch={(searchText) => {
            setSearchTextValue(searchText);
          }}
        />
      </GridItem>
      <Show above="sm">
        <GridItem pl="2" area={"aside"} paddingY={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid clickedGenre={selectedGenre} searchInput={searchTextValue} />
      </GridItem>
    </Grid>
  );
};

export default App;
