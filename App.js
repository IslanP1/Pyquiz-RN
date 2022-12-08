import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import AppRoutes from './src/screens/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
