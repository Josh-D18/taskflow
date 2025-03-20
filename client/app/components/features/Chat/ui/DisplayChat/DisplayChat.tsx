import { View, FlatList } from "react-native"
import { useState } from "react";
import MESSAGES from "@/data/chatMessages.json"
import ChatBox from "../ChatBox/ChatBox";

interface IDirectMessageData {
    conversation_id: string;
    participants: string[];
    messages: {
        message_id: string;
        user_id: string;
        username: string;
        avatar: string;
        content: string;
        timestamp: string;
    }[]
}

interface IGroupMessageData {
    group_id: string;
    group_name: string;
    messages: {
        message_id: string;
        user_id: string;
        username: string;
        avatar: string;
        content: string;
        timestamp: string;
    }[];
}

interface IChat {
    isGroup: boolean
}

const DisplayChat = (props: IChat) => {
    const { isGroup } = props;
    const [groupChatData] = useState<IGroupMessageData>(MESSAGES.groupChats[0]);
    const [directMessageData] = useState<IDirectMessageData>(MESSAGES.directMessages[0])
   
    return (
        <View>
            {isGroup ?   
                <FlatList
                    data={groupChatData['messages']}
                    initialNumToRender={7}
                    renderItem={({item}) => <ChatBox content={item.content} username={item.username} avatar={item.avatar} />}
                    keyExtractor={item => item.message_id} 
                /> 
            :  
                <FlatList
                    data={directMessageData['messages']}
                    initialNumToRender={7}
                    renderItem={({item}) => <ChatBox content={item.content} username={item.username} avatar={item.avatar} />}
                    keyExtractor={item => item.message_id} 
                />
            }
        </View>
    )
}

export default DisplayChat;