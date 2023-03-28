import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RecipeDetail = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.subTitle}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            - {ingredient}
          </Text>
        ))}
        <Text style={styles.subTitle}>Instructions:</Text>
        <Text style={styles.instructions}>{recipe.instructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recipeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 18,
    marginBottom: 5,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RecipeDetail;
