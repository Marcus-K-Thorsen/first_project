import { useState, useEffect} from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<Genre[]>("genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data);
            })
    })
}

export default useGenres;