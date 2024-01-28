import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}
export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      // title: '',
      headerLeft: () => (
        // <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={{marginLeft: 20}}>
            <Icon name="menu" size={40} />
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'Pedro'})
          }>
          <Text>
            <Icon name="man" size={50} color="white" />
          </Text>
          <Text style={styles.botonGrandeText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 2, nombre: 'Maria'})
          }>
          <Text>
            <Icon name="woman" size={50} color="white" />
          </Text>
          <Text style={styles.botonGrandeText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
