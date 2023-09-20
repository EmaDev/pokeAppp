import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value:string) => void;
}
export const SearchInput = ({onDebounce}: Props) => {
  
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue(textValue, 500);
    
    const sarchPokemonFromName = () => {

    }

    useEffect( () => {
        
        onDebounce(debouncedValue);
        
    }, [debouncedValue]);
    return (
   
     <View style={styles.container}>
         <TextInput
         placeholder='Search Pokemon'
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         placeholderTextColor="white"
         value={textValue}
         onChangeText={ setTextValue }
         />
         <Icon
         name='search-outline'
         color="white"
         size={30}
         style={{marginLeft: 10}}
         />
         
     </View>
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#2E2E2E',
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        color: 'white',
        fontSize: 18,
        padding: 0,
        flex: 1
    }
});
