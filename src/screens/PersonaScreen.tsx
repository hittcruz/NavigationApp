import React, {useContext, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

/* interface RouteParams {
  id: number;
  name: string;
} */
interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}
export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params; //as RouteParams;
  const {
    changeUsername,
    authState: {username},
  } = useContext(AuthContext);
  const changeUsernameContext = (username: string) => {
    changeUsername(username);
  };
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
      headerBackTitle: '',
    });
  }, []);

  useEffect(() => {
    changeUsernameContext(params.nombre);
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
