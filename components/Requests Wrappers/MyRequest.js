import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  TagIcon,
  InboxStackIcon,
} from "react-native-heroicons/solid";

const MyRequest = (props) => {
  const StatusIcon =
    props.status === "Finished"
      ? CheckCircleIcon
      : props.status === "Pending"
      ? ClockIcon
      : XCircleIcon;
  const color =
    props.status === "Finished"
      ? "#16a34a"
      : props.status === "Pending"
      ? "#9ca3af"
      : "#dc2626";
  return (
    <TouchableOpacity className="bg-blue-300/80 my-2 flex-col rounded-3xl space-y-2 p-4">
      <View className="flex-row space-x-2 items-center">
        <TagIcon className="w-16 h-16" color={"black"} />
        <Text className="text-white text-sm ">{props.category}</Text>
      </View>
      <View className="flex-row space-x-2 items-center">
        <InboxStackIcon className="w-16 h-16" color={"black"} />
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
    </TouchableOpacity>
  );
};

export default MyRequest;
