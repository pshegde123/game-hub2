import { Card, CardBody, Image, HStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ imagePath, gameHeader, platforms, score }) => {
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
