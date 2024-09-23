import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = "blue";
    if (score !== null) color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

    return (
        <Badge
            variant="outline"
            colorScheme={color}
            borderRadius="4px"
            paddingX={2}
            border="1px solid"
        >
            {score ?? "n/a"}
        </Badge>
    );
};

export default CriticScore;