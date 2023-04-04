import Footer from "../components/Footer";
function Requests() {
  const [currentView, setCurrentView] = useState("All Requests");
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full p-2  bg-white">
      <View className="flex-col h-full">
        <ScrollView
          horizontal={false}
          className="flex-grow p-2 divide-y-2 divide-red-300 "
        ></ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default Requests;
