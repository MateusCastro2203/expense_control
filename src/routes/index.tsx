import React from 'react';
import {HomeRoutes} from '../modules/home/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SpentRoutes} from '../modules/payments/routes';
import {ExpenseRoutes} from '../modules/expense/routes';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarLabelStyle: {fontSize: 16},
          tabBarIcon: () => <Icon name="home" color="#000" size={30} />,
        }}
      />
      <Tab.Screen
        name="Earning"
        component={ExpenseRoutes}
        options={{
          headerShown: false,
          tabBarLabel: 'Entradas',
          tabBarLabelStyle: {fontSize: 16},
          tabBarIcon: () => <Icon name="plus" color="#000" size={30} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={SpentRoutes}
        options={{
          headerShown: false,
          tabBarLabel: 'Saidas',
          tabBarLabelStyle: {fontSize: 16},
          tabBarIcon: () => <Icon name="minus" color="#000" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
