import { Platform } from "../hooks/useGames";
import { HStack, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
    FaSteam,
    FaWrench,
} from "react-icons/fa";
  
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
    platforms: Platform[];
}


const PlatformIconsList = ({ platforms }: Props) => {
    return (
        //<>
            <HStack marginY="1">
                {platforms.map((platform) => (
                    <Icon key={platform.id} as={getIcon(platform.slug)}/>
                ))}
            </HStack>
            //{platforms.map((platform) => (
            //    <Text key={platform.id}>{platform.name}</Text>
            //))}
        //</>
    )
}


const getIcon = (slug: string) => {
    switch (slug) {
        case "pc":
            return FaWindows;
        case "linux":
            return FaLinux;
        case "mac":
            return FaApple;
        case "playstation":
            return FaPlaystation;
        case "xbox":
            return FaXbox;
        case "nintendo":
            return SiNintendo;
        case "ios":
            return MdPhoneIphone;
        case "android":
            return FaAndroid;
        case "steam":
            return FaSteam;
        case "web":
            return BsGlobe;
        default:
            return FaWrench;
    }
}


export default PlatformIconsList;