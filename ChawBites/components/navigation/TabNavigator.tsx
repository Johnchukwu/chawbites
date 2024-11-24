import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Profile" component={Screen2} />
      </Tab.Navigator>
  
  );
};

export default TabNavigator;
