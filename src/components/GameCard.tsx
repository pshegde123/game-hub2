import { Card, CardBody, Image, HStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Props {
  imagePath: string;
  gameHeader: string;
  platforms: { platform: Platform }[];
  score: number;
}
const GameCard = ({ imagePath, gameHeader, platforms, score }: Props) => {
  //console.log(platforms);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imagePath} />
      <CardBody>
        <Heading fontSize="2xl">{gameHeader}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platformslist={platforms} />
          <CriticScore score={score} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
