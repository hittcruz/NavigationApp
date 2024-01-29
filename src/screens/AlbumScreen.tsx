import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {
    logOut,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumScreen</Text>
      {isLoggedIn && <Button title="LogOut" onPress={logOut} />}
    </View>
  );
};
