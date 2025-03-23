import { View } from "react-native";
import { useState } from "react";
import MESSAGES from "@/data/chatMessages.json";
import ChatBox from "../ChatBox/ChatBox";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

interface IDirectMessageData {
    conversation_id: string;
    participants: string[];
    messages: Message[];
}

interface IGroupMessageData {
    group_id: string;
    group_name: string;
    messages: Message[];
}

interface Message {
    message_id: string;
    user_id: string;
    username: string;
    avatar: string;
    content: string;
    timestamp: string;
}

interface IChat {
    isGroup: boolean;
    isDirect: boolean;
}

const DisplayChat = ({ isGroup, isDirect }: IChat) => {
    const [groupChatData] = useState<IGroupMessageData>(MESSAGES.groupChats[0]);
    const [directMessageData] = useState<IDirectMessageData>(MESSAGES.directMessages[0]);

    const renderItem = ({ item }: ListRenderItemInfo<Message>) => (
        <ChatBox content={item.content} username={item.username} avatar={item.avatar} />
    );

    const chatData = isGroup ? groupChatData.messages : isDirect ? directMessageData.messages : [];

    return (
        <View className="w-full h-full">
            <FlashList
                data={chatData}
                estimatedItemSize={25}
                renderItem={renderItem}
                keyExtractor={(item) => item.message_id}
            />
        </View>
    );
};

export default DisplayChat;
