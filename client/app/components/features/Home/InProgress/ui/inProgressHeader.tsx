import { View, Text } from "react-native"

const InProgressHeader = () => {
    return (
        <View className="flex-row mt-4 items-center">
            <Text className="text-xl font-bold">In Progress</Text>
            <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
                6
            </Text>
        </View>
    )
}

export default InProgressHeader;