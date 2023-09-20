import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonFull } from '../hooks/usePokemonFull';
import { PokemonDatail } from '../components/PokemonDetail';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemonData } = usePokemonFull(simplePokemon.id);

    return (
        <View style={{ flex: 1, backgroundColor: '#2B2B2B' }}>

            <View style={{ ...styles.headerContainer, backgroundColor: color }}>

                <View style={styles.pokeballContainer}>
                    <Image source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeball} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{ top: top + 15, ...styles.backButton }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={50}
                    />
                </TouchableOpacity>

                <Text style={{ top: top + 65, ...styles.pokemonName }}>
                    {`${simplePokemon.name}\n# ${simplePokemon.id}`}
                </Text>

                <FadeInImage uri={simplePokemon.picture}
                    styleContainer={{ width: 300, height: 300, position: 'absolute', bottom: -20 }}
                    styleImage={{ width: '100%', height: '100%' }} />

            </View>
            {
                (isLoading) ?
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 25 }}>
                        <ActivityIndicator
                            size={45}
                            color={color}
                        />
                    </View>
                    :
                    <PokemonDatail pokemonData={pokemonData} />
            }

        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        height: 370,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        zIndex: 999,
        alignItems: 'center'
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        position: 'absolute',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        left: 20,
    },
    pokeballContainer: {
        position: 'absolute',
        height: 370,
        width: 400,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        alignItems: 'center',
        overflow: 'hidden',
        opacity: 0.5
    },
    pokeball: {
        position: 'absolute',
        width: 250,
        height: 250,
        bottom: -60
    }
});
