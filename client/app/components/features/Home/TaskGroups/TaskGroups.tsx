import { View, Text } from "react-native"

const TaskGroups = () => {

    return (
        <View className="">
             {/* Info Section */}
            <View className="flex-row mt-4 items-center">
                <Text className="text-xl font-bold">Group Tasks</Text>
                <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
                    6
                </Text>
            </View>
        </View>
    )
}

export default TaskGroups;