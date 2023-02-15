import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pantry from './Pantry';
import Home from './Home';
import Cookbook from './Cookbook';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'Pantry') {
                    iconName = focused
                        ? 'ios-nutrition'
                        : 'ios-nutrition-outline';
                } else if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline'
                } else if (route.name === 'Cookbook') {
                    iconName = focused
                        ? 'ios-bookmarks'
                        : 'ios-bookmarks-outline'
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
            initalRouteName="Home"
        >
            <Tab.Screen name="Pantry" component={Pantry} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cookbook" component={Cookbook} />
        </Tab.Navigator>
    );
}

export default Tabs;