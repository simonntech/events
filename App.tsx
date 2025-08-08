import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  async function handlePress(id:number) {
    console.log('Pressionado', id)
  }

  return (
    <View style={styles.container}>
      <Text
        style={{fontSize:18}} 
        onPress={() => handlePress(5)} 
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
