import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="comments" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={23} name="bell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}


 {/* <Tabs.Screen
        name="createtask"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
        }}
      /> */}