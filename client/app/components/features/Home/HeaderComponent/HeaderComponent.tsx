import { View, FlatList } from "react-native"
import Header from "../Header/Header"
import DailyTracker from "../DailyTracker/DailyTracker"
import GroupTaskHeader from "../TaskGroups/ui/GroupTaskHeader"
import InProgress from "../InProgress/InProgress"
import inprogressData from "@/data/inprogress.json"
import InProgressHeader from "../InProgress/ui/inProgressHeader"

const HeaderComponent = () => {
    return (
        <View>
            <Header/>
            <View className="px-4 mx-[16px]">
                <DailyTracker/>
                <InProgressHeader/>
                <FlatList
                    data={inprogressData}
                    renderItem={({item}) => <InProgress title={item.title} description={item.description} completionPercentage={item.completionPercentage} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    snapToInterval={2}
                    snapToAlignment="start"
                    showsHorizontalScrollIndicator={false}
                    >
                </FlatList>
                <GroupTaskHeader/>
            </View> 
        </View>
    )
}

export default HeaderComponent;