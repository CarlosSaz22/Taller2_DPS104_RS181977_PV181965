import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Suma from '../Pantallas/Suma';
import Resta from '../Pantallas/Resta';
import Multiplicacion from '../Pantallas/Multiplicacion';
import Division from '../Pantallas/Division';
import Factorial from '../Pantallas/Factorial';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Suma"
        component={Suma}
        options={{
          tabBarLabel: 'Suma',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Resta"
        component={Resta}
        options={{
          tabBarLabel: 'resta',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="minus" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Multiplicación"
        component={Multiplicacion}
        options={{
          tabBarLabel: 'Multiplicación',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="multiplication"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="División"
        component={Division}
        options={{
          tabBarLabel: 'División',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="division" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Factorial"
        component={Factorial}
        options={{
          tabBarLabel: 'Factorial',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="exclamation"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
