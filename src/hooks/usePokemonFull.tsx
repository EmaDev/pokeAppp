import { useEffect, useState } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from "../interfaces/pokemonInterfaces";

export const usePokemonFull = (id: string) => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState<PokemonFull|any>({});

    const loadPokemon = async() => {

        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonData( resp.data );
        setIsLoading(false);
    };

    useEffect( () => {
        loadPokemon();
    }, []);

    return {isLoading, pokemonData};
}
