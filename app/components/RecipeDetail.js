import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe, index } = route.params;
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleIngredientChange = (text, ingredientIndex) => {
    const newIngredients = [...ingredients];
    newIngredients[ingredientIndex] = text;
    setIngredients(newIngredients);
  };

  const handleSave = () => {
    const updatedRecipe = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    };
    navigation.navigate('Recipes', { recipe: updatedRecipe, index: index });
  };

  return ( // returns the display data 
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Recipe Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subheading}>Ingredients:</Text>
        <FlatList
          data={ingredients}
          renderItem={({ item, index }) => (
            <View style={styles.ingredientContainer}>
              <TextInput
                style={styles.ingredientInput}
                placeholder={`Ingredient ${index + 1}`}
                value={item}
                onChangeText={(text) => handleIngredientChange(text, index)}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subheading}>Instructions:</Text>
        <TextInput
          style={styles.instructionsInput}
          placeholder="Instructions"
          multiline={true}
          value={instructions}
          onChangeText={setInstructions}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

// CSS for the above code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
  },
  ingredientContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ingredientInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  instructionsInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 150,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default RecipeDetailsScreen;
