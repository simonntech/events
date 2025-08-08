import { StyleSheet, Text, View } from 'react-native';
import { helloDarthVader } from './src/actions';

export default function App() {

  async function handlePress(id: number) {
    console.log('Pressionado', id)
  }

  async function handlerHelloWorld() {
    console.log('Hello handler function')
  }

  return (
    <View style={styles.container}>
      <Text
        onPress={() => console.log('Inline')}
        style={{ fontSize: 18 }}
      >Inline</Text>
      <Text
        style={{ fontSize: 18 }}
        onPress={handlerHelloWorld}
      >Handler Function</Text>
      <Text
        style={{ fontSize: 18 }}
        onPress={() => handlePress(5)}
      >Handler Function with Parameters</Text>
      <Text
        style={{ fontSize: 18 }}
        onPress={helloDarthVader}
      >Another File Function</Text>
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
