import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddIngredient = ({ addIngredient }) => {
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (text) => {
    setIngredient(text);
  };

  const handleAddIngredient = () => {
    addIngredient(ingredient);
    setIngredient('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Ingredient</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredient"
        value={ingredient}
        onChangeText={handleInputChange}
      />
      <Button title="Add" onPress={handleAddIngredient} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default AddIngredient;
