import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Button,
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const [genre, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => {
        //console.log(res.data.results);
        setGenres(res.data.results);
        setIsDataLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (!isDataLoaded) return <Spinner />;
  {
    error && <Text>{error}</Text>;
  }
  return (
    <ul>
      {genre.map((g) => (
        <List>
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={g.image_background} />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
