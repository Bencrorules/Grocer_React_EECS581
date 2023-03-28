import { createStackNavigator } from '@react-navigation/stack';

import AddIngredient from './AddIngredient';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddIngredient" component={AddIngredient} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
