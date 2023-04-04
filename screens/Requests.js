import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";
import Request from "../components/Requests Wrappers/Request";
import { useState } from "react";
import { useFonts } from "expo-font";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
function Requests() {
  const [currentView, setCurrentView] = useState("All Requests");
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  const route = useRoute();
  const requests = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full p-2  bg-white">
      <View className="flex-col h-full">
        <ScrollView
          horizontal={false}
          className="flex-grow p-2 divide-y-2 divide-red-300 "
          overScrollMode="never"
        >
          {requests.map((req) => {
            return (
              <Request
                id={req.id}
                name={req.requesteeID}
                title={req.title}
                request={req.description}
                category={req.category}
              />
            );
          })}
        </ScrollView>
        <View className="p-2">
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Requests;
