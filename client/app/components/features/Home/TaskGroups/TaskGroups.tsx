import { View, Text } from "react-native"
import data from "@/data/groupList.json"
import Task from "./ui/Task";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

const TaskGroups = () => {
    const renderItem = ({item}: ListRenderItemInfo<{
        id: string;
        title: string;
        amountOfTasks: number;
        completionPercentage: number;
    }>) => {
        return (
            <Task title={item.title} amountOfTasks={item.amountOfTasks} completionPercentage={item.completionPercentage} />
        )
    }

    return (
        <View>
            <View className="flex-row mt-4 items-center mb-6">
                <Text className="text-xl font-bold">Group Tasks</Text>
                <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
                    6
                </Text>
            </View>
            <FlashList 
                data={data}
                estimatedItemSize={data.length}
                renderItem={renderItem}
                keyExtractor={item => item.id}>
            </FlashList>
        </View>
    )
}

export default TaskGroups;