import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface IHeader {
    headingTitle: string;
}

const Header = (props: IHeader) => {
    const { headingTitle } = props;

    return (
        <View className="h-[100px]">  
            <View className="flex-1 w-full flex-row items-start justify-around mt-7">
                <TouchableOpacity className="mt-1">
                    <MaterialCommunityIcons name="backspace" size={25} color="black" />
                </TouchableOpacity>
                
                <Text className="text-[18px] tracking-[-0.3px]">{headingTitle}</Text>

                <TouchableOpacity className="mt-1">
                    <Entypo name="new-message" size={25} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;