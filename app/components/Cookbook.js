import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Recipe from "./Ingredient";

const FindScreen = ({ navigation }) => {
  const [recipe, setRecipe] = useState();
  const [recipeItems, setRecipeItems] = useState([]);

  const addRecipe = () => {
    setRecipeItems([...recipeItems, recipe]);
    setRecipe(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}>Recipes:</Text>
          <View style={styles.items}>
            {recipeItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Recipe text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.recipeWrapper}>
        <TouchableOpacity onPress={() => addRecipe()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  items: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  recipeWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
