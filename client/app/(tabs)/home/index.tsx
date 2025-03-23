import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import data from "@/data/groupList.json"
import Task from "../../components/features/Home/TaskGroups/ui/Task";
import HeaderComponent from "../../components/features/Home/HeaderComponent/HeaderComponent";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

export default function HomeScreen() {

  const renderItem = ({item}: ListRenderItemInfo<{
    id: string;
    title: string;
    amountOfTasks: number;
    completionPercentage: number;
}>) => {
    return (
      <View className="px-4 mx-[14px]">
        <Task title={item.title} amountOfTasks={item.amountOfTasks} completionPercentage={item.completionPercentage} />
      </View>
    )
}

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="w-full h-full">
          <FlashList 
              data={data}
              estimatedItemSize={data.length}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={<HeaderComponent/>}
              showsHorizontalScrollIndicator={false}
              >
          </FlashList>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

