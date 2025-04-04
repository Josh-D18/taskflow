import Header from "@/app/components/common/Header/Header";
import { View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NotificationScreen() {
  return (
      <SafeAreaProvider>
        <SafeAreaView>
        <Header headingTitle="Notifications"/>
          <View>
            <Text className="">New</Text>
            {/* Display New Notifications */}
            
            <Text className="">Old</Text>
            {/* Display Old Notifications */}
            

          </View>
        </SafeAreaView>
        </SafeAreaProvider>
  );
}

// className="flex-1 items-center justify-center"