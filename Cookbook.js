import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const DATA = [
  { id: "1", key: "Recipe1" },
  { id: "2", key: "Recipe2" },
  { id: "3", key: "Recipe3" },
  { id: "4", key: "Recipe4" },
  { id: "5", key: "Recipe5" },
  { id: "6", key: "Recipe6" },
  { id: "7", key: "Recipe7" },
  { id: "8", key: "Recipe8" },
];

const Cookbook = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "blue",
  },
});

export default Cookbook;
