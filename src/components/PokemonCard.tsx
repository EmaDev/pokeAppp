import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: SimplePokemon;
}

const { width: widthScreen, height: heightScreen } = Dimensions.get('window');
export const PokemonCard = ({ pokemon }: Props) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  const navigator = useNavigation();

  useEffect( () => {

    ImageColors.getColors( pokemon.picture, {fallback: 'grey'})
    .then( colors => {

      if(!isMounted.current) return;
      if(colors.platform === 'android'){
        setBgColor(colors.dominant || 'grey');
      }else if(colors.platform === 'ios'){
        setBgColor(colors.background || 'grey')
      }
    });

    return () => {
      isMounted.current = false;
    }
  },[]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigator.navigate('DetailScreen', {simplePokemon: pokemon, color: bgColor})}
    >
      <View style={{ ...styles.cardContainer, width: widthScreen * 0.4, backgroundColor: bgColor }}>

        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {`\n #${pokemon.id}`}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokebola} />
        </View>

        <FadeInImage uri={pokemon.picture}
          styleContainer={styles.pokemonImage}
          styleImage={{ width: '100%', height: '100%' }}
        />
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: '#F5F4AD',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    opacity: 0.5
  },
  pokebola: {
    width: 100,
    height: 100,
    bottom: -20,
    right: -20,
    position: 'absolute',
    overflow: 'hidden'
  },
  pokemonImage: {
    width: 125,
    height: 125,
    position: 'absolute',
    right: -10,
    bottom: -10
  }
});
