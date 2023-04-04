import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {
  UserCircleIcon,
  InboxStackIcon,
  TagIcon,
  PhoneIcon,
} from "react-native-heroicons/solid";

const Request = (props) => {
  return (
    <TouchableOpacity className="my-2 rounded-3xl " id={props.id}>
      <ImageBackground
        source={require("../../src/kl_14.jpg")}
        resizeMode="cover"
        borderRadius={15}
        className="p-2 space-y-2"
      >
        <View className="flex-row space-x-2 items-center ">
          <UserCircleIcon className="w-16 h-16 " color={"white"} />
          <View className=""></View>
          <Text className="text-white  ">{props.name}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <TagIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm ">{props.category}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <PhoneIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm ">{props.title}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <InboxStackIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.request}
          </Text>
        </View>
        <View className="">
          <TouchableOpacity className="p-2  bg-white rounded-lg text-sm ">
            <Text className="font-bold w-full text-center text-black">
              Make offer
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Request;
