import { View, Text, StyleSheet } from "react-native";

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Groups]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
