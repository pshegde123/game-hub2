import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ imagePath, gameHeader, platforms }) => {
  //console.log(platforms);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imagePath} />
      <CardBody>
        <Heading fontSize="2xl">{gameHeader}</Heading>
        <PlatformIconList platformslist={platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
