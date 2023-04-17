import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Motion } from "@legendapp/motion";
const WelcomePage = () => {
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 10000,
      duration: 40000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 2000],
    outputRange: ["0deg", "720deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  if (fontsLoaded)
    return (
      <SafeAreaView className="h-full bg-sky-600">
        <Motion.View
          initial={{ x: -100, y: -100, opacity: 0.5, scale: 0.7 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <View className="my-20 ">
            <View className="">
              <Animated.View style={animatedStyle} className="-my-4">
                <Image
                  source={require("../src/003-car-services.png")}
                  className="w-12 h-12 mx-auto rounded-full"
                ></Image>
              </Animated.View>

              <View className="flex-row my-10">
                <Animated.Image
                  source={require("../src/004-electronics.png")}
                  className="w-10 h-10 mx-auto rounded-full"
                  style={animatedStyle}
                ></Animated.Image>
                <View className="bg-amber-50 p-2 rounded-full w-36 h-36 ">
                  <Text
                    style={{ fontFamily: "Ultra2" }}
                    className="text-center animate-ping  text-slate-600 my-auto justify-center text-3xl"
                  >
                    5adamat
                  </Text>
                </View>
                <Animated.Image
                  source={require("../src/005-painting.png")}
                  className="w-10  h-10 mx-auto rounded-full"
                  style={animatedStyle}
                ></Animated.Image>
              </View>
              <View className="flex-row -mx-6 -my-4">
                <Animated.Image
                  source={require("../src/provider.png")}
                  className="w-10  h-10 mx-auto rounded-full"
                  style={animatedStyle}
                ></Animated.Image>
                <Animated.Image
                  source={require("../src/006-delivery-truck.png")}
                  className="w-10  h-10 mx-auto rounded-full"
                  style={animatedStyle}
                ></Animated.Image>
              </View>
              <View className="">
                <Animated.Image
                  source={require("../src/software-application.png")}
                  className="w-10  h-10 mx-auto rounded-full"
                  style={animatedStyle}
                ></Animated.Image>
              </View>
            </View>
            <View className="mt-8">
              <Text className="text-sm  text-center mx-auto p-2 text-black font-bold ">
                Your place to all services and any servies, make a request and
                choose the best offer that suits you!
              </Text>
            </View>
          </View>
          <View className="flex-row mt-6  mx-auto space-x-4">
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{ fontFamily: "Ultra" }}
                className="text-xl bg-white rounded-lg p-4 text-center text-black"
              >
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ fontFamily: "Ultra" }}
                className="text-xl  bg-white rounded-lg p-4 text-center text-black"
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="flex-row mt-4 mx-auto p-2 space-x-2 bg-white rounded-lg items-center ">
            <View className="bg-white rounded-lg p-0.5">
              <Image
                source={require("../src/google-symbol.png")}
                className=" h-8 w-8"
              />
            </View>
            <Text
              style={{ fontFamily: "Ultra" }}
              className="text-xl  text-center text-black"
            >
              Login with google
            </Text>
          </TouchableOpacity>
        </Motion.View>
      </SafeAreaView>
    );
  else return <Text>Loading...</Text>;
};

export default WelcomePage;
