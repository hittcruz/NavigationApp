import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}
export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="ir Pagina 3"
        onPress={() => navigation.navigate('Pagina3')}
      />
      <Button
        title="ir Persona"
        onPress={() => navigation.navigate('Persona')}
      />
    </View>
  );
};
