import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full p-2 bg-blue-200">
      <View className="border-white h-full  border-4 space-y-6   rounded-3xl p-4">
        <Text className="mx-auto text-2xl" style={{ fontFamily: "Ultra2" }}>
          Login to your account
        </Text>
        <TextInput
          placeholder="Email"
          className="bg-white rounded-md p-2"
        ></TextInput>
        <TextInput
          placeholder="Password"
          className="bg-white rounded-md p-2 "
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity className="flex-row">
          <Text className="flex-1"></Text>
          <Text className="underline float-left">Forgot password</Text>
        </TouchableOpacity>
        <View className="items-center flex-row">
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" mx-auto   p-4"
          >
            <Text
              className="text-lg text-black"
              style={{ fontFamily: "Ultra2" }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            className="w-32 mx-auto rounded-full bg-white  p-4"
          >
            <Text
              className="text-lg text-black text-center"
              style={{ fontFamily: "Ultra2" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
