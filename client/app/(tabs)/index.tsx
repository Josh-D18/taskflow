import { FlatList,View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import data from "@/data/groupList.json"
import Task from "../components/features/Home/TaskGroups/ui/Task";
import HeaderComponent from "../components/features/Home/HeaderComponent/HeaderComponent";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList 
            data={data}
            renderItem={({item}) => 
              <View className="px-4 mx-[14px]">
                <Task title={item.title} amountOfTasks={item.amountOfTasks} completionPercentage={item.completionPercentage} />
              </View>
          }
            keyExtractor={item => item.id}
            ListHeaderComponent={<HeaderComponent/>}
            >
        </FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

