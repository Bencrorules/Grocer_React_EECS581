import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, navigation }) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        recipe={itemData.item}
        onSelect={() => {
          navigation.navigate('RecipeDetail', {
            recipe: itemData.item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {recipes.length > 0 ? (
        <FlatList
          data={recipes}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noRecipes}>No recipes found. Add a recipe!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  noRecipes: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
  },
});

export default RecipeList;
