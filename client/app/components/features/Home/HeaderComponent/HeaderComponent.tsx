import { FlatList, ListRenderItemInfo, View } from "react-native"
import Header from "../Header/Header"
import DailyTracker from "../DailyTracker/DailyTracker"
import GroupTaskHeader from "../TaskGroups/ui/GroupTaskHeader"
import InProgress from "../InProgress/InProgress"
import inprogressData from "@/data/inprogress.json"
import InProgressHeader from "../InProgress/ui/inProgressHeader"


const HeaderComponent = () => {
    const renderItem = ({item}: ListRenderItemInfo<{
        id: string;
        title: string;
        description: string;
        completionPercentage: number;
    }>) => <InProgress title={item.title} description={item.description} completionPercentage={item.completionPercentage} />

    // const [inprogressData, setInprogressData] = useState([]);

    // useEffect(() => {
    //     fetchData(); // Call function to get data
    // }, []);
    
    // const fetchData = async () => {
    //     // Simulate fetching data
    //     const data = await getTasks(); 
    //     setInprogressData(data);
    // };
    
    return (
        <View>
            <Header/>
            <View className="px-4 mx-[16px] w-full">
                <DailyTracker/>
                <InProgressHeader/>
                <View className="flex-1 h-full">
                <FlatList
                    data={inprogressData}
                    initialNumToRender={8}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                </FlatList>
                </View>
                <GroupTaskHeader/>
            </View> 
        </View>
    )
}

export default HeaderComponent;