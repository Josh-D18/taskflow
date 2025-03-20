import { View, Text, Image } from "react-native";

interface IChatBox{
    content: string;
    username: string;
    avatar: string;
}

const ChatBox = (props: IChatBox) => {
    const {content, username, avatar} = props;

    return (
        <View>
          <View className="flex-1 flex-row">  
                <Image source={{uri: avatar}} className="w-[60px] bg-black h-[60px] rounded-full" />
                <View className="mb-6 ml-1 inline-block w-[200px]">
                    <Text className="text-[15px] font-semibold">{username}</Text>
                    <Text className="text-[13px] line-clamp-1">{content}</Text>
                </View>
                <View>
                    <Text>31 mins ago</Text>
                </View>

            </View>    
        </View>
    )
}

export default ChatBox;