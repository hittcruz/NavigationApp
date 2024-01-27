import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}
export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.botonGrandeText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.botonGrandeText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
