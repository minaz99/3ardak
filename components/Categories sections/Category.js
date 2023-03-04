import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon } from "react-native-heroicons/solid";

const Category = (props) => {
  const navigation = useNavigation();
  return (
    <View className="p-4 border-b bg-white border-gray-300">
      <View className="flex-row items-center  ">
        <View className="flex-1 flex-row space-x-1 items-center  ">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            className=""
          >
            <Text className="text-black">{props.categoryName}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="">
            <ChevronDownIcon height="16" color={"#475569"} />
          </TouchableOpacity>
        </View>
        <View className="rounded-full h-7 w-7 justify-center  bg-gray-300/80 ">
          <Text className="text-center text-black">{props.requestsCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default Category;
