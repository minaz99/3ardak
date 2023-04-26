import { View, Text, ImageBackground } from "react-native";
import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  InboxStackIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";

const MyOfferWrapper = (props) => {
  const StatusIcon =
    props.status === "ACCEPTED"
      ? CheckCircleIcon
      : props.status === "PENDING"
      ? ClockIcon
      : XCircleIcon;
  const color =
    props.status === "ACCEPTED"
      ? "#16a34a"
      : props.status === "PENDING"
      ? "#9ca3af"
      : "#dc2626";
  return (
    <View key={props.id} className="my-2">
      <ImageBackground
        source={require("../../src/4.jpg")}
        resizeMode="cover"
        borderRadius={15}
        className="p-2 space-y-2"
      >
        <View className="flex-row space-x-2 items-center">
          <InformationCircleIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.description}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <StatusIcon className="w-16 h-16" color={color} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.status}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyOfferWrapper;
