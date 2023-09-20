import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    color?: string;
}

export const Title = ({text, color} : Props) => {

  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: 20 + top, marginHorizontal: 20, marginVertical: 15}}>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: color}}>{text}</Text>
    </View>
  )
}
