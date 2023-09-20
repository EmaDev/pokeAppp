import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

import { PokemonCard } from '../components/PokemonCard';
import { Title } from '../components/Title';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { GlobalStyles } from '../theme/GlobalStyles';

export const HomeScreen = () => {
    const theme = {
        backgrounColor: "#2B2B2B",
        titleColor: "#F5F4AD",
        textColor: "#FFFFDE"
    }

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (

        <View style={{ flex: 1, backgroundColor: theme.backgrounColor }}>

            <Image source={require('../assets/pokebola.png')}
                style={GlobalStyles.pokebolaBG}
            />

            <View style={{alignItems: 'center'}}>
                <FlatList

                    data={simplePokemonList}
                    ListHeaderComponent={<Title text="Pokedex" color={theme.titleColor} />}

                    keyExtractor={(pokemon) => pokemon.id}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    //Infitin scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={

                        <View style={{ paddingVertical: 20 }}>
                            <ActivityIndicator
                                size={40}
                                color="#BEF4F9"
                            />
                        </View>
                    }
                />
            </View>
        </View>
    )
}
