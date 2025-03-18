import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View className="flex-row items-center justify-center mt-4 px-6">
      {/* User Profile Section */}
      <View className="flex-row flex-1 items-center">
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 60, height: 60, borderRadius: 999 }}
        />
        <View className="ml-3 mt-1">
          <Text className="text-base font-normal mb-1">Hello!</Text>
          <Text className="text-lg font-medium">Josh Date</Text>
        </View>
      </View>
      {/* Notification Icon */}
        <MaterialCommunityIcons name="bell" size={24} color="black" />
      {/* When User Gets A Notification, change the icon */}
      {/* <MaterialCommunityIcons name="bell-badge" size={24} color="black" /> */}
    </View>
  );
};

export default Header;
