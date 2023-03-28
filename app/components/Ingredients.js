import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Ingredients = () => {
  const [sortOption, setSortOption] = useState('recent');
  const ingredients = useSelector(state => state.ingredients.ingredients);

  const sortedIngredients = ingredients.slice().sort((a, b) => {
    if (sortOption === 'recent') {
      return b.timestamp - a.timestamp;
    } else if (sortOption === 'leastRecent') {
      return a.timestamp - b.timestamp;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.sortOptions}>
        <TouchableOpacity
          style={[styles.sortOptionButton, sortOption === 'recent' && styles.activeSortOptionButton]}
          onPress={() => setSortOption('recent')}
        >
          <Text style={styles.sortOptionButtonText}>Most Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortOptionButton, sortOption === 'leastRecent' && styles.activeSortOptionButton]}
          onPress={() => setSortOption('leastRecent')}
        >
          <Text style={styles.sortOptionButtonText}>Least Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortOptionButton, sortOption === 'alphabetical' && styles.activeSortOptionButton]}
          onPress={() => setSortOption('alphabetical')}
        >
          <Text style={styles.sortOptionButtonText}>Alphabetical</Text>
        </TouchableOpacity>
      </View>
      {sortedIngredients.length > 0 ? (
        sortedIngredients.map(ingredient => (
          <View key={ingredient.id} style={styles.ingredient}>
            <Text>{ingredient.name}</Text>
            <Text>{ingredient.amount}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noIngredients}>You haven't added any ingredients yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sortOptions: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sortOptionButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
  activeSortOptionButton: {
    backgroundColor: '#ccc',
  },
  sortOptionButtonText: {
    fontWeight: 'bold',
  },
  ingredient: {
    marginBottom: 16,
  },
  noIngredients: {
    fontStyle: 'italic',
  },
});

export default Ingredients;
