import { Card, CardBody, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const GameCard = ({ imagePath, gameHeader }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imagePath} />
      <CardBody>
        <Heading fontSize="2xl">{gameHeader}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
