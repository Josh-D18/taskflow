import { View, StyleSheet, Text, ScrollView } from "react-native";
import {Header} from "@/app/components/features/Header/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DailyTracker } from "../components/features/Home/DailyTracker/DailyTracker";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Header/>
          <DailyTracker/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15
  },
});
