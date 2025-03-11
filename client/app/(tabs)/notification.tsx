import { View, Text, StyleSheet } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Notification]</Text>
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
