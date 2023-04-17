import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
/*import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list"; */
import { useDispatch } from "react-redux";
import { registerUser } from "../API calls/RegisterUserSlice";
//import { registerUser } from "../API calls/RegisterUserSlice";
const Register = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  //const [selected, setSelected] = useState("");
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  /*const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
  ];*/

  return (
    <SafeAreaView className="h-full bg-sky-600 p-2">
      <View className="  border-white border-4 h-full rounded-3xl p-4 space-y-6 flex-col">
        <Text className="mx-auto text-2xl" style={{ fontFamily: "Ultra2" }}>
          Create new account
        </Text>
        <TextInput
          value={fname}
          onChangeText={setFname}
          placeholder="First Name"
          className="bg-white rounded-md p-2"
        ></TextInput>
        <TextInput
          value={lname}
          onChangeText={setLname}
          placeholder="Last Name"
          className="bg-white rounded-md  p-2"
        ></TextInput>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          className=" rounded-md bg-white p-2"
        ></TextInput>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Password"
          className=" rounded-md bg-white p-2"
        ></TextInput>
        {/*
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          label="Select gender"
          search={false}
          boxStyles={{ backgroundColor: "white", borderColor: "white" }} //override default styles
  />*/}
        <View className="flex-row items-center space-x-2">
          <Text className="bg-white rounded-md p-3  text-md">+965</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
            placeholder="Phone Number"
            className="bg-white rounded-md p-2"
          ></TextInput>
        </View>
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          className="bg-white rounded-md p-2"
        ></TextInput>
        <View className="items-center flex-row">
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" sticky top-[15vh]  mx-auto   p-4"
          >
            <Text
              className="text-lg text-black"
              style={{ fontFamily: "Ultra2" }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              dispatch(
                registerUser({
                  fname,
                  lname,
                  email,
                  password,
                  phoneNumber,
                  address,
                })
              )
            }
            className="sticky top-[15vh] w-32 mx-auto rounded-full bg-white  p-4"
          >
            <Text
              className="text-lg text-black text-center"
              style={{ fontFamily: "Ultra2" }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
