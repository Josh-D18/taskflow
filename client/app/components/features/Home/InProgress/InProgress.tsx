import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import Entypo from "@expo/vector-icons/Entypo";

const InProgress = () => {
  return (
    <View className="">
      {/* Info Section */}
      <View className="flex-row mt-4 items-center">
        <Text className="text-xl font-bold">In Progress</Text>
        <Text className="ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
          6
        </Text>
      </View>

      {/* Task Card */}
      <View className="mt-4 bg-blue-300 h-[160px] rounded-2xl p-4">
        {/* Title & Icon */}
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700 font-semibold">Office Project</Text>
          <Entypo name="suitcase" size={20} color="pink" className="bg-pink-600 px-2 py-2 rounded-[10]" />
        </View>

        {/* Task & Progress Bar */}
        <View className="mt-2">
          <Text className="text-black w-[60%] pb-6">Grocery shopping app design</Text>
          <Progress.Bar progress={0.4} width={200} unfilledColor={'white'} borderRadius={20} animated/>
        </View>
      </View>
    </View>
  );
};

export default InProgress;
