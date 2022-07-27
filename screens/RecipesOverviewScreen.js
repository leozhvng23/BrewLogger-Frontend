import { View, Text, StyleSheet } from 'react-native';

import { RECIPES } from '../data/dummy';

const RecipesOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recipes Overview</Text>
    </View>
  );
}

export default RecipesOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
