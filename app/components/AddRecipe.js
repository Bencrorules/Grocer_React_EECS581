import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AddRecipe = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const handleTitleChange = (text) => setTitle(text);

  const handleIngredientChange = (text) => {
    const ingredientsArray = text.split('\n');
    setIngredients(ingredientsArray);
  };

  const handleInstructionsChange = (text) => setInstructions(text);

  const handleAddRecipe = () => {
    const newRecipe = { title, ingredients, instructions };
    // Save the new recipe to database or store
    navigation.navigate('RecipeList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Recipe</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipe title"
        value={title}
        onChangeText={handleTitleChange}
      />
      <Text style={styles.label}>Ingredients:</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter ingredients, separate each with a new line"
        value={ingredients.join('\n')}
        onChangeText={handleIngredientChange}
        multiline
        numberOfLines={5}
      />
      <Text style={styles.label}>Instructions:</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter recipe instructions"
        value={instructions}
        onChangeText={handleInstructionsChange}
        multiline
        numberOfLines={10}
      />
      <Button title="Add Recipe" onPress={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  multiline: {
    height: 150,
    textAlignVertical: 'top',
  },
});

export default AddRecipe;
