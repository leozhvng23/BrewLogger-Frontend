import { View, StyleSheet, ActivityIndicator } from 'react-native'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="rgba(0,0,0,0.6)" /> 
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "white"
    }
})