import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div>
            {error && <Text color="tomato">{error}</Text>}
            <ul>
                <SimpleGrid 
                    columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                    spacing={10}
                    padding="10"
                >
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </SimpleGrid>
            </ul>
        </div>
    );
};

export default GameGrid;