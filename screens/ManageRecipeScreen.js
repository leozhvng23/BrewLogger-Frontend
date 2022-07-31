import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageRecipeScreen({ route, navigation }) {
  const editedRecipeId = route.params?.rid;
  const isEditing = !!editedRecipeId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Recipe' : 'Add Recipe',
    });
  }, [navigation, isEditing]);

  return <Text>Manage Recipe</Text>;
}

export default ManageRecipeScreen;