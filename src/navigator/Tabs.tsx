import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores, styles} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabAndroid />;
};

//Para Android

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      activeColor="#9F4FDE"
      inactiveColor="white"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'airplane-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'aperture-outline';
              break;
            case 'StackNavigator':
              iconName = 'american-football-outline';
              break;

            default:
              break;
          }
          return (
            <Text style={{color, fontSize: 40, fontWeight: 'bold'}}>
              {/* {iconName} */}
              <Icon name={iconName} size={25} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1"
        options={
          {
            //tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
            // title: '',
          }
        }
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};
//Para IOS
const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'airplane-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'aperture-outline';
              break;
            case 'StackNavigator':
              iconName = 'american-football-outline';
              break;

            default:
              break;
          }
          return (
            <Text style={{color, fontSize: 18, fontWeight: 'bold'}}>
              {/* {iconName} */}
              <Icon name={iconName} size={20} />
            </Text>
          );
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1"
        options={
          {
            //tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
          }
        }
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
