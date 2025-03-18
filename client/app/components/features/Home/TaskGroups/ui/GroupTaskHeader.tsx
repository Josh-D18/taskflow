import { View, Text } from "react-native"

const GroupTaskHeader = () => {
    return (
        <View className="flex-row mt-4 items-center mb-6">
            <Text className="text-xl font-bold">Group Tasks</Text>
            <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
                 6
            </Text>
        </View> 
    )
}

export default GroupTaskHeader;