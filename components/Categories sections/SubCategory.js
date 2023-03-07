import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubCategory = (props) => {
  return (
    <View className="p-4 bg-white  flex-col">
      <View className="flex-row items-center  ">
        <View className="flex-1 flex-row space-x-1 items-center  ">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            className=""
          >
            <Text className="text-blue-400">{props.categoryName}</Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-full h-7 w-7 justify-center  bg-blue-200 ">
          <Text className="text-center text-black">{props.requestsCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default SubCategory;
