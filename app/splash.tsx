import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
import image from "@/assets/images/splashimage.jpg";

export default function SplashPage() {
  return (
    <View>
      <Image src={image} />
      <Text>Manage your Task with TaskFlow</Text>
      <Button title="Let's Start" />
    </View>
  );
}
