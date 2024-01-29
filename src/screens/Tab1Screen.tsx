import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="bus-outline" />
        <TouchableIcon iconName="bar-chart-outline" />
        <TouchableIcon iconName="baseball-outline" />
        <TouchableIcon iconName="bicycle-outline" />
        <TouchableIcon iconName="desktop-outline" />
        <TouchableIcon iconName="earth-outline" />
        <TouchableIcon iconName="qr-code-outline" />
      </Text>
    </View>
  );
};
