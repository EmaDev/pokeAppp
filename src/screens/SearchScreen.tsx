import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { Title } from '../components/Title';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const {isFetching, pokemonsSearches} = usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
    const [term, setTerm] = useState('');

    useEffect( () => {
        if(term.length === 0){
            return setPokemonFiltered([]);
        }
        
        if(isNaN( Number(term) )){
            setPokemonFiltered(
                pokemonsSearches.filter( poke => (poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())) )
            );
            
        }else{
            setPokemonFiltered(
                [pokemonsSearches.find(poke => poke.id === term)!]
            );
        }
    },[term]); 

    if(isFetching) {
        return (
            <View style={{flex: 1, backgroundColor: '#2B2B2B', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator
                size={40}
                color="white"
                />
                <Text style={{color: 'white'}}>Cargando...</Text>
            </View>
        )
    }

    return (
    <View style={{flex: 1, backgroundColor: '#2B2B2B'}}>
        <View style={{marginTop: top + 20, marginHorizontal: 10}}>
            <SearchInput onDebounce={setTerm}/>

            <FlatList
            data={pokemonFiltered}
            keyExtractor={ (pokemon) => pokemon.id }
            showsVerticalScrollIndicator={false}
            numColumns={2}

            renderItem={ ({item}) => (<PokemonCard pokemon={item}/>) }
            ListHeaderComponent={ (<Title text={term} color="white"/>) }
            />
        </View>
    </View>
  )
}
