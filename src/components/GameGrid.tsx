import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { plaform: Platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = ({ clickedGenre, searchInput }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        //console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/games", {
        params: { genres: clickedGenre?.id },
      })
      .then((res) => {
        //console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [clickedGenre]);

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/games", {
        params: { search: searchInput },
      })
      .then((res) => {
        //console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [searchInput]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            imagePath={game.background_image}
            gameHeader={game.name}
            platforms={game.parent_platforms}
            score={game.metacritic}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
