import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Header = () => {
    return (
        <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={styles.image}/>
            <View style={styles.userContentContainer}>
                <Text style={styles.greetingText}>Hello!</Text>
                <Text style={styles.userName}>Josh Date</Text>
            </View>
        </View>
        <MaterialCommunityIcons name="bell" size={24} color="black" />
        {/* When User Gets A Notification, change the icon */}
        {/* <MaterialCommunityIcons name="bell-badge" size={24} color="black" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 99
    },
    userContentContainer: {
        marginLeft: 12,
        marginTop: 3
    },
    greetingText: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 3
    },
    userName: {
        fontSize: 17,
        fontWeight: '500'
    }
  });
  