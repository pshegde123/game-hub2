import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { HStack } from "@chakra-ui/react";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Props {
  platformslist: Platform[];
}

const PlatformIconList = ({ platformslist }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    Android: FaAndroid,
    Playstation: FaPlaystation,
    Xbox: FaXbox,
    Nintendo: SiNintendo,
    Mac: FaApple,
    Linux: FaLinux,
    Iphone: MdPhoneIphone,
    Web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platformslist.map((p) => (
        <Icon as={iconMap[p.platform.name]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
