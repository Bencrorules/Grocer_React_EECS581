import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Cookbook = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
          { key: "Recipe" },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
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
  },
});

export default Cookbook;
