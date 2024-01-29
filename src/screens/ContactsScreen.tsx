import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    singIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!isLoggedIn && <Button title="SingIn Cont" onPress={singIn} />}
      {/* <Button title="SingIn Cont" onPress={singIn} /> */}
    </View>
  );
};
