import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  async function handlePress() {
    console.log('Pressionado')
  }

  return (
    <View style={styles.container}>
      <Text 
       onPress={handlePress} 
      >Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
