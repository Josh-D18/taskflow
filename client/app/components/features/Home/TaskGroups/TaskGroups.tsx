import { View, Text, FlatList } from "react-native"
import data from "@/data/groupList.json"
import Task from "./ui/Task";

const TaskGroups = () => {
    return (
        <View className="">
            <View className="flex-row mt-4 items-center mb-6">
                <Text className="text-xl font-bold">Group Tasks</Text>
                <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
                    6
                </Text>
            </View>
            <FlatList 
                data={data}
                renderItem={({item}) => <Task title={item.title} amountOfTasks={item.amountOfTasks} completionPercentage={item.completionPercentage} />}
                keyExtractor={item => item.id}>
            </FlatList>
        </View>
    )
}

export default TaskGroups;