import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/home'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 94, 255)',
    paddingTop: 30
  },
});

// Z3fYycESn3UYpDYytPqX8Jn3fdh9alCR98rfviIs