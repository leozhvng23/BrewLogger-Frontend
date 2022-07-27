import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((value) => (
    <View key={value} style={styles.listItem}>
      <Text style={styles.itemText}>{value}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e0e0e0',
  },
  itemText: {
    textAlign: "left",
    fontSize: 15
  },
});
