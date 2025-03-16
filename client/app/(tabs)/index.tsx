import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "@/app/components/features/Header/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DailyTracker  from "../components/features/Home/DailyTracker/DailyTracker";
import InProgress from "../components/features/Home/InProgress/InProgress";
import TaskGroups from "../components/features/Home/TaskGroups/TaskGroups";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Header/>
          <View className="px-4 mx-[16px]">
            <DailyTracker/>
            <InProgress/>
            <TaskGroups/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
