import { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: "#7c7c7c"
  },
  subtitleContainer: {
    paddingBottom: 12,
    marginHorizontal: 12,
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1.5,
  },
});
