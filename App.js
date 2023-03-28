import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Ingredients from './Ingredients';
import RecipeList from './RecipeList';
import Home from './Home';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Ingredients') {
              iconName = 'ios-list';
            } else if (route.name === 'Recipes') {
              iconName = 'ios-book';
            } else if (route.name === 'Favorites') {
              iconName = 'ios-heart';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Ingredients" component={Ingredients} />
        <Tab.Screen name="Recipes" component={RecipeList} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
