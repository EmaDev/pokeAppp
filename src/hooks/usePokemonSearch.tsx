import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";


export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [pokemonsSearches, setPokemonsSearches] = useState<SimplePokemon[]>([]);


    const loadPokemons = async () => {
        
        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonListToSimplePokemon(resp.data.results);
    }

    const mapPokemonListToSimplePokemon = (PokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = PokemonList.map(({ name, url }) => {

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture }
        });

        setPokemonsSearches(newPokemonList);
        setIsFetching(false);
    }


    useEffect(() => {
        loadPokemons();
    }, []);

    return {isFetching, pokemonsSearches};
}
