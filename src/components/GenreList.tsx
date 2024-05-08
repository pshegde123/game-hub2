import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const GenreList = () => {
  const [genre, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => {
        //console.log(res.data.results);
        setGenres(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <ul>
      {genre.map((g) => (
        <li>
          <Text>{g.name}</Text>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
