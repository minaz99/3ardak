import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../API calls/LoginUserSlice";
import { useEffect } from "react";

const Login = () => {
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((session) => session.login);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return isSuccess === false ? (
    <SafeAreaView className="h-full p-2 bg-sky-600">
      <View className="border-white h-full  border-4 space-y-6   rounded-3xl p-4">
        <Text className="mx-auto text-2xl" style={{ fontFamily: "Ultra2" }}>
          Login to your account
        </Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          className="bg-white rounded-md p-2"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          className="bg-white rounded-md p-2 "
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity className="flex-row">
          <Text className="flex-1"></Text>
          <Text className="underline float-left text-white">
            Forgot password
          </Text>
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
            onPress={() => dispatch(loginUser({ email, password }))}
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
  ) : (
    <View>{navigation.navigate("Categories")}</View>
  );
};

export default Login;
