import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const RecipeScreen = ({ navigation }) => {
  const [sortOption, setSortOption] = useState('recent');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [recipeItems, setRecipeItems] = useState([]);

  const sortedRecipes = recipeItems
    .slice()
    .sort((a, b) => {
      if (sortOption === 'recent') {
        return b.timestamp - a.timestamp;
      } else {
        return a.title.localeCompare(b.title);
      }
    })
    .sort((a, b) => {
      if (a.favorite === b.favorite) {
        return 0;
      } else if (a.favorite) {
        return -1;
      } else {
        return 1;
      }
    });

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleIngredientsChange = (text) => {
    setIngredients(text);
  };

  const handleInstructionsChange = (text) => {
    setInstructions(text);
  };

  const handleAddRecipe = () => {
    const newRecipe = {
      title: title,
      ingredients: '123',
      instructions: instructions,
      timestamp: new Date().getTime(),
      favorite: false,
    };
    setRecipeItems([...recipeItems, newRecipe]);
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('Recipe Details Screen', { recipe });
  };

  const handleFavoriteToggle = (recipe) => {
    const index = recipeItems.findIndex((item) => item.timestamp === recipe.timestamp);
    const newRecipeItems = [...recipeItems];
    newRecipeItems[index].favorite = !newRecipeItems[index].favorite;
    setRecipeItems(newRecipeItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter recipe title"
          value={title}
          onChangeText={handleTitleChange}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Enter ingredients"
          value={ingredients}
          onChangeText={handleIngredientsChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter instructions"
          value={instructions}
          onChangeText={handleInstructionsChange}
        /> */}
        <Button title="Add Recipe" onPress={handleAddRecipe} />
      </View>
      <View style={styles.sortOptions}>
        <Text>Sort by:</Text>
        <Button title="Recent" onPress={() => setSortOption('recent')} />
        <Button title="Alphabetical" onPress={() => setSortOption('alphabetical')} />
      </View>
      <FlatList
        data={sortedRecipes}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[styles.recipeItem, { flex: 1 }]}
              onPress={() => handleRecipePress(item)}>
              {item.title}
            </Text>
            <Button
              title={item.favorite ? 'Unfavorite' : 'Favorite'}
              onPress={() => handleFavoriteToggle(item)}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  sortOptions: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  recipeItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RecipeScreen;
