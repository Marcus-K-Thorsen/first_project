import useGenres from "../hooks/useGenres"
import { Text, List, ListItem, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} padding="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            objectFit="cover"
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
                
            ))}
        </List>
    )
};

export default GenreList;