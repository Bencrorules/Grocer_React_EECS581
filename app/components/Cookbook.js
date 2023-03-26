import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Recipe from "./Ingredient";

const FindScreen = ({ navigation }) => {
  const [recipe, setRecipe] = useState();
  const [recipeItems, setRecipeItems] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setinputText] = useState();
  const [recipeName, setRecipeName] = useState();
  var entryIndex = "";

  const addRecipe = () => {
    Keyboard.dismiss();
    setRecipeItems([...recipeItems, recipe]);
    setRecipe(null);
  };

  const recipeInfo = (index, item) => {
    entryIndex = index;
    setisModalVisible(true);
    setRecipeName(item);
  };

  const closeModal = () => {
    setisModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
        transparent
      >
        <View style={styles.modalBackgroud}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{recipeName} </Text>
            <Text style={styles.otherText}>Recipe Info</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => closeModal()}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.recipeWrapper}>
          <Text style={styles.sectionTitle}>Recipes:</Text>
          <View style={styles.items}>
            {recipeItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => recipeInfo(index, item)}
                >
                  <Recipe text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeRecipeWrapper}
        keyboardVerticalOffset={110}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add a Recipe"}
          value={recipe}
          onChangeText={(text) => setRecipe(text)}
        />
        <TouchableOpacity onPress={() => addRecipe()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##E8EAED",
  },
  items: {
    marginTop: 30,
  },
  recipeWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
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
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  writeRecipeWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modalBackgroud: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalText: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  closeText: {
    textAlign: "center",
    fontSize: 12,
  },
  otherText: {
    textAlign: "center",
    fontSize: 12,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    marginLeft: 70,
    backgroundColor: "#2196F3",
  },
});
