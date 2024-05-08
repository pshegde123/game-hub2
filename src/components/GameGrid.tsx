import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard imagePath={game.background_image} gameHeader={game.name} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
