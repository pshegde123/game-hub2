import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
    >
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <Show above="sm">
        <GridItem pl="2" bg="green.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="blue.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
