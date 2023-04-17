import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";
import Request from "../components/Requests Wrappers/Request";
import { useState } from "react";
import { useFonts } from "expo-font";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import MakeOffer from "../components/Offers Wrappers/MakeOffer";
import { useEffect } from "react";

function Requests() {
  const [currentView, setCurrentView] = useState("All Requests");
  const [reqObj, setReqObj] = useState({});
  const [showMakeOffer, setShowMakeOffer] = useState(false);
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

  const makeRequestObject = (
    id,
    requesteeName,
    title,
    description,
    category
  ) => {
    setReqObj({
      id: id,
      requesteeName: requesteeName,
      title: title,
      description: description,
      category: category,
    });
    setShowMakeOffer(true);
    // alert(showMakeOffer);
  };

  return (
    <SafeAreaView className="h-full  bg-white">
      <View className="h-full ">
        <View className="items-center flex-grow relative">
          <ScrollView
            horizontal={false}
            className="flex-grow z-10 divide-y-2 divide-red-300 "
            overScrollMode="never"
          >
            {requests.map((req) => {
              return (
                <Request
                  id={req.id}
                  name={req.requesteeName}
                  title={req.title}
                  request={req.description}
                  category={req.category}
                  makeRequestObject={makeRequestObject}
                  showMakeOffer={showMakeOffer}
                />
              );
            })}
          </ScrollView>

          {showMakeOffer === true ? (
            <View className="z-10 p-6 h-full w-full  absolute ">
              <MakeOffer
                setShowMakeOffer={setShowMakeOffer}
                reqObject={reqObj}
                showMakeOffer={showMakeOffer}
              />
            </View>
          ) : (
            <View></View>
          )}
        </View>
        <View className="z-0  p-2">
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Requests;
