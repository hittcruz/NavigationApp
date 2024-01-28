import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color="purple" />
        <Icon name="aperture-outline" size={80} color="purple" />
        <Icon name="american-football-outline" size={80} color="purple" />
        <Icon name="bus-outline" size={80} color="purple" />
        <Icon name="bar-chart-outline" size={80} color="purple" />
        <Icon name="baseball-outline" size={80} color="purple" />
        <Icon name="bicycle-outline" size={80} color="purple" />
        <Icon name="desktop-outline" size={80} color="purple" />
        <Icon name="earth-outline" size={80} color="purple" />
        <Icon name="qr-code-outline" size={80} color="purple" />
      </Text>
    </View>
  );
};
