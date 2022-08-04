import { useLayoutEffect } from 'react';
import { Text } from 'react-native';
import RecipeForm from '../components/RecipeForm';

function ManageRecipeScreen({ route, navigation }) {
  const editedRecipeId = route.params?.id;
  const isEditing = !!editedRecipeId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Recipe' : 'Add Recipe',
    });
  }, [navigation, isEditing]);

  return (
    <RecipeForm/> 
  );
}

export default ManageRecipeScreen;