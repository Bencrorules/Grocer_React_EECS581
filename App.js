import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, React } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const Pantry = () => {
  return (
    <View style={styles.container}>
      <Text>Pantry</Text>
    </View>
  );
};

const Cookbook = () => {
  return (
    <View style={styles.container}>
      <Text>Cookbook</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pantry" component={Pantry} />
      <Tab.Screen name="Cookbook" component={Cookbook} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
