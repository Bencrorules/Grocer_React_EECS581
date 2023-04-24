import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const IngredientsScreen = () => {
  const [sortOption, setSortOption] = useState('recent');
  const [ingredient, setIngredient] = useState('');
  const [ingredientItems, setIngredientItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const sortedIngredients = ingredientItems.slice().sort((a, b) => {
    if (sortOption === 'recent') {
      return b.timestamp - a.timestamp;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const handleInputChange = (text) => {
    setIngredient(text);
  };

  const handleAddIngredient = () => {
    const newIngredient = { name: ingredient, timestamp: new Date().getTime() };
    setIngredientItems([...ingredientItems, newIngredient]);
    setIngredient('');
  };

  const handleIngredientPress = (index) => {
    setEditingIndex(index);
    setIngredient(ingredientItems[index].name);
  };

  const handleSaveIngredient = () => {
    const newIngredients = [...ingredientItems];
    newIngredients[editingIndex].name = ingredient;
    setIngredientItems(newIngredients);
    setEditingIndex(null);
    setIngredient('');
  };

  const handleCancelEditing = () => {
    setEditingIndex(null);
    setIngredient('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter ingredient"
          value={ingredient}
          onChangeText={handleInputChange}
        />
        {editingIndex === null ? (
          <Button title="Add" onPress={handleAddIngredient} />
        ) : (
          <>
            <Button title="Save" onPress={handleSaveIngredient} />
            <Button title="Cancel" onPress={handleCancelEditing} />
          </>
        )}
      </View>
      <View style={styles.sortOptions}>
        <Text>Sort by:</Text>
        <Button title="Recent" onPress={() => setSortOption('recent')} />
        <Button title="Alphabetical" onPress={() => setSortOption('alphabetical')} />
      </View>
      <FlatList
        data={sortedIngredients}
        renderItem={({ item, index }) => (
          <Text style={styles.ingredientItem} onPress={() => handleIngredientPress(index)}>
            {item.name}
          </Text>
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
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sortOptions: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ingredientItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default IngredientsScreen
