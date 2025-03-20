import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/common/Header/Header";
import ChatNavigation from "../components/features/Chat/ChatNavigation";

export default function ChatScreen() {

  return (
      <SafeAreaProvider>
          <SafeAreaView>
            <Header headingTitle="Messages"/>
            <ChatNavigation />
          </SafeAreaView>
      </SafeAreaProvider>
  );
}

