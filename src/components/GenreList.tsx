import useGenres from "../hooks/useGenres"
import { Text } from "@chakra-ui/react";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();

    return (
        <>
            {genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
            ))}
        </>
    )
};

export default GenreList;