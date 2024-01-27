import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

/* interface RouteParams {
  id: number;
  name: string;
} */
interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}
export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params; //as RouteParams;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
      headerBackTitle: '',
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
