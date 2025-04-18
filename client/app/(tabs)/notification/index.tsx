import Header from "@/app/components/common/Header/Header";
import { FlashList } from "@shopify/flash-list";
import { View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import data from "@/data/notifications.json"
import DisplayNotification from "@/app/components/features/Notifications/DisplayNotification";

export default function NotificationScreen() {

  const renderItem = (title:string, lastReceived: string, icon:string, group: string) => {
    return <DisplayNotification  title={title} lastReceived={lastReceived} icon={icon} group={group} />
  }
  return (
      <SafeAreaProvider>
        <SafeAreaView>
        <Header headingTitle="Notifications"/>
          <View className="px-7 flex-11 h-full w-full">
            <Text className="pb-5 font-bold text-[18px]">New</Text>
            {/* Display New Notifications */}
            <View className="w-full h-[250px]">
              <FlashList 
                data={data.new}
                estimatedItemSize={data.new.length}
                renderItem={({item}) => renderItem(item.title, item.lastReceived, item.icon, item.group)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                />      
            </View>

            <View className="w-full h-[250px]">
                <Text className="py-5 font-bold text-[18px]">Old</Text>
                {/* Display Old Notifications */}
                <FlashList 
                  data={data.old}
                  estimatedItemSize={data.old.length}
                  renderItem={({item}) => renderItem(item.title, item.lastReceived, item.icon, item.group)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  /> 
              </View> 
          </View>
        </SafeAreaView>
        </SafeAreaProvider>
  );
}

// className="flex-1 items-center justify-center"