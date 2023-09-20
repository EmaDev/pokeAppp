import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
  pokemonData: PokemonFull;
}

export const PokemonDatail = ({ pokemonData }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ ...StyleSheet.absoluteFillObject }}>

      <View style={styles.container}>

        <View style={styles.dataSecction}>
          <Text style={styles.subtitle}>Types: </Text>
          <View style={{ flexDirection: 'row' }}>
            {
              pokemonData.types.map(({ type }) => (
                <Text key={type.name} style={{ ...styles.text, marginHorizontal: 5 }}>
                  {type.name}
                </Text>
              ))
            }
          </View>
        </View>

        <View style={styles.dataSecction}>
          <Text style={styles.subtitle}>Weight: </Text>
          <Text style={styles.text}>{`${pokemonData.weight} Kg`}</Text>
        </View>

        <View style={styles.dataSecction}>
          <Text style={styles.subtitle}>Sprites: </Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FadeInImage uri={pokemonData.sprites.front_default} styleContainer={styles.basicSprite} styleImage={{width: '100%', height: '100%'}}/>
            <FadeInImage uri={pokemonData.sprites.back_default} styleContainer={styles.basicSprite} styleImage={{width: '100%', height: '100%'}}/>
            <FadeInImage uri={pokemonData.sprites.front_shiny} styleContainer={styles.basicSprite} styleImage={{width: '100%', height: '100%'}}/>
            <FadeInImage uri={pokemonData.sprites.back_shiny} styleContainer={styles.basicSprite} styleImage={{width: '100%', height: '100%'}}/>
          </ScrollView>
        </View>

        <View style={styles.dataSecction}>
          <Text style={styles.subtitle}>Basic Abilities: </Text>
          <View style={{ flexDirection: 'row' }}>
            {
              pokemonData.abilities.map(({ ability }) => (
                <Text key={ability.name} style={{ ...styles.text, marginHorizontal: 5 }}>
                  {ability.name}
                </Text>
              ))
            }
          </View>
        </View>
        <View style={styles.dataSecction}>
          <Text style={styles.subtitle}>Moves: </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {
              pokemonData.moves.map(({ move }) => (
                <Text key={move.name} style={{ ...styles.text, marginHorizontal: 5 }}>
                  {move.name}
                </Text>
              ))
            }
          </View>
        </View>

        <View style={{...styles.dataSecction, marginBottom: 80}}>
          <Text style={styles.subtitle}>Stats: </Text>
          <View>
            {
              pokemonData.stats.map((stat, i) => (
                <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                  <Text style={{...styles.text, width: 200}}>{stat.stat.name}</Text>
                  <Text style={{...styles.text, marginLeft: 10, fontWeight: 'bold'}}>{stat.base_stat}</Text>
                </View>
              ))
            }
          </View>
        </View>

      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  container: {
    marginHorizontal: 20,
    marginTop: 380,
  },
  dataSecction:{
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  subtitle: {
    fontSize: 22,
    color: '#EDEDED',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    color: '#DDDDDD',
  },
  basicSprite:{
    width: 150,
    height: 150
  }

});