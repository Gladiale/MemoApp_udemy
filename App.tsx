import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/components/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      {/* bang={true}の時はbangで省略で書くが可能 */}
      <Hello bang>World</Hello>
      <Hello style={{ fontSize: 16 }}>World</Hello>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
