import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";


interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius="10" overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="2x1">{game.name}</Heading>
                <PlatformIconsList
                    platforms={game.parent_platforms.map((pp) => pp.platform)}
                />
            </CardBody>
        </Card>
    );
};

export default GameCard;