import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {
  UserCircleIcon,
  InboxStackIcon,
  TagIcon,
  PhoneIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  HashtagIcon,
} from "react-native-heroicons/solid";
import MakeOffer from "../Offers Wrappers/MakeOffer";

const Request = (props) => {
  return (
    <TouchableOpacity className="my-2 rounded-3xl " key={props.id}>
      <ImageBackground
        source={require("../../src/indigo-blue-plain-textured-background-fabric-block-prints.jpg")}
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
          <InboxStackIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm ">{props.category}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <InformationCircleIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm flex-shrink  ">
            {props.title}
          </Text>
        </View>
        {/*
        <View className="flex-row space-x-2 items-center">
          <DocumentTextIcon className="w-16 h-16" color={"white"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.request}
          </Text>
  </View>*/}

        {!props.showMakeOffer ? (
          <View className="">
            <TouchableOpacity
              onPress={() =>
                props.makeRequestObject(
                  props.id,
                  props.name,
                  props.title,
                  props.request,
                  props.category
                )
              }
              className="p-2  bg-white rounded-lg text-sm "
            >
              <Text className="font-bold w-full text-center text-black">
                Make offer
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Request;
