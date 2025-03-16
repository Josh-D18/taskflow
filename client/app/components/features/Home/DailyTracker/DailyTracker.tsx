import Button from "@/app/components/common/Button/Button";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const DailyTracker = () => {
  return (
    <View className="bg-purple-700 rounded-[40px] p-4 h-[200px] flex-row mt-4 justify-around items-center">
      {/* Info Section */}
      <View className="w-[150px] self-start">
        <Text className="text-white pb-6">Today's Task Is Almost Done</Text>
        <Button content="View Task" btnStyle="bg-white text-purple-700 px-3 py-2 rounded-lg text-center" />
      </View>

      {/* Progress Wheel */}
      <View className="flex-2 self-center">
        <AnimatedCircularProgress
          size={85}
          width={7}
          fill={75}
          tintColor="#0073e6"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
      </View>

      {/* Icon Button */}
      <View className="flex-3 items-center self-start">
        <TouchableOpacity onPress={() => {/* do this */}}>
          <Entypo name="dots-three-horizontal" size={24} className="bg-purple-500 w-9 h-9 rounded-full text-center pt-1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DailyTracker;
