import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  TagIcon,
  InboxStackIcon,
  InformationCircleIcon,
} from "react-native-heroicons/solid";

const MyRequest = (props) => {
  const StatusIcon =
    props.status === "FINISHED"
      ? CheckCircleIcon
      : props.status === "PENDING"
      ? ClockIcon
      : XCircleIcon;
  const color =
    props.status === "FINISHED"
      ? "#16a34a"
      : props.status === "PENDING"
      ? "#9ca3af"
      : "#dc2626";
  return (
    <TouchableOpacity className="my-2 rounded-3xl " id={props.id}>
      <ImageBackground
        source={require("../../src/4.jpg")}
        resizeMode="cover"
        borderRadius={15}
        className="p-2 space-y-2"
      >
        <View className="flex-row space-x-2 items-center">
          <InboxStackIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm ">{props.category}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <InformationCircleIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.request}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <StatusIcon className="w-16 h-16" color={color} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.status}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MyRequest;
