import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View className="flex-row items-center justify-center mt-4 px-7">
      {/* User Profile Section */}
      <View className="flex-row flex-1 items-center">
        <View className="ml-3 mt-1">
          <Text className="text-base font-normal mb-1">Hello!</Text>
          <Text className="text-lg font-medium">Josh Date</Text>
        </View>
      </View>
      <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 60, height: 60, borderRadius: 999 }}
        />
    </View>
  );
};

export default Header;
