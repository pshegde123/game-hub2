import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, List, ListItem, Image, HStack } from "@chakra-ui/react";
interface Genre {
  id: number;
  name: string;
  image_background: string;
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
        <List>
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={g.image_background} />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
