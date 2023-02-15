import { NavigationContainer } from '@react-navigation/native';
import Tabs from './app/components/Tabs'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}