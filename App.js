import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Ingredients from './app/components/Ingredients';
import RecipeList from './app/components/RecipeList';
import Home from './app/components/Home';

import RecipeDetailsScreen from './app/components/RecipeDetail';
// import store from './app/store';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabScreen = () => {
  return(
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Ingredients') {
                iconName = 'ios-list';              
              } else if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Recipes') {
                iconName = 'ios-book';
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
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Recipes" component={RecipeList} />
          
        </Tab.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Grocer" component={TabScreen} />
          <Stack.Screen name="Recipe Details Screen" component={RecipeDetailsScreen} />
        </Stack.Navigator>
        
      </NavigationContainer>
  );
};

export default App;
