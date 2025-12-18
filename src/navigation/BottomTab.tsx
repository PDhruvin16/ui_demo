import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home/HomeScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
// import CardsScreen from '../screens/Cards/CardScreen';
import RewardsScreen from '../screens/Rewards/RewardScreen';
import { styles } from './style';
import CardScreen from '../screens/Cards/CardScreen';

const Tab = createBottomTabNavigator();

function ScannerButton({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.scannerButton}>
        <Icon name="qrcode-scan" size={28} color="#000" />
      </View>
    </TouchableOpacity>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#A3FF12',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-variant" size={26} color={color} />
          ),
        }}
      />
      
      <Tab.Screen 
        name="Cards" 
        component={CardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card-multiple" size={26} color={color} />
          ),
        }}
      />

      {/* CENTER SCANNER */}
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarButton: (props) => <ScannerButton {...props} />,
        }}
      />

      <Tab.Screen 
        name="Rewards" 
        component={RewardsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="gift" size={26} color={color} />
          ),
        }}
      />
      
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}