import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../store/actions/recipeActions';

const EditRecipe = ({ route }) => {
  const { recipe } = route.params;
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const updatedRecipe = {
      id: recipe.id,
      title,
      description,
      ingredients,
      instructions,
      created_at: recipe.created_at,
    };
    dispatch(updateRecipe(updatedRecipe));
    navigation.navigate('RecipeDetail', { recipe: updatedRecipe });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Instructions"
        multiline={true}
        value={instructions}
        onChangeText={(text) => setInstructions(text)}
      />
      <Button title="Update Recipe" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginVertical: 10,
  },
});

export default EditRecipe;
