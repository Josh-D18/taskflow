import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import Entypo from "@expo/vector-icons/Entypo";

interface IProgress {
  title: string,
  description: string,
  completionPercentage: number
}

const InProgress = (props: IProgress) => {
  const { title, description, completionPercentage } = props;
    return (
      <View>
        <View className="mt-4 bg-blue-300 rounded-2xl p-4 mr-7 w-[245px] flex-1 items-center justify-around">
          <View className="flex-row justify-between items-center">
            <Text className="text-base text-gray-700 font-semibold w-[170px] text-[16px]">{title}</Text>
            <Entypo name="suitcase" size={20} color="pink" className="bg-pink-600 px-2 py-2 rounded-[10px]" />
          </View>

          <View className="mt-2">
            <Text className="text-black w-[100%] pb-6 text-[14px]">{description}</Text>
            <Progress.Bar progress={completionPercentage} width={200} unfilledColor={'white'} borderRadius={20} animated />
          </View>
        </View>
      </View>
    );
};

export default InProgress;
