import React, { useState } from 'react';
import { BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from '../inicial';
import TelaPerfil from '../perfil';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react'

const Tab = createBottomTabNavigator();



const MyTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5015bd',
        tabBarStyle: { position: 'absolute', backgroundColor: '#000000' },
      }}>
      <Tab.Screen
        name="Tela inicial"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: '#000000' },
          headerTitleStyle: { color: "#fff" },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" style={{ color: '#a8939ecc' }} size={size} />
          ),


        }}

      />


      <Tab.Screen
        name="Tela de perfil"
        component={SettingsScreen}
        options={{
          headerStyle: { backgroundColor: '#000000' },
          headerTitleStyle: { color: "#fff" },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color = 'red', size }) => (
            <MaterialIcons name="account-circle" style={{ color: '#a8939ecc' }} size={size} />
          ),



        }} />

    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <TelaInicial />
  );
};

const SettingsScreen = () => {
  return (
    <TelaPerfil />
  );
};

export default MyTabs