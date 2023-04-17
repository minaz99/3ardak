import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import SubCategories from "./SubCategories";
const Category = (props) => {
  const [expaneded, setExpanded] = useState(false);
  const navigation = useNavigation();
  const subCategories = [
    { categoryName: "Air conditioning (A/C)", requestsCount: "2" },
    { categoryName: "Washing machine", requestsCount: "5" },
    { categoryName: "Fridge", requestsCount: "9" },
    { categoryName: "Oven", requestsCount: "1" },
  ];

  const clickedCategory = () => {
    props.setClickedCategory(!props.clickedCategory);
    navigation.navigate("Requests", props.categoriesRequests);
  };

  return (
    <View className="p-4 border-b bg-white  border-gray-300 flex-col">
      <View className="flex-row items-center ">
        <View className="flex-1 flex-row space-x-1 items-center  ">
          <TouchableOpacity onPress={clickedCategory} className="">
            <Text className="text-sky-600">{props.categoryName}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExpanded(!expaneded)}
            className=""
          >
            <ChevronDownIcon height="16" color={"#475569"} />
          </TouchableOpacity>
        </View>
        <View className="rounded-full h-7 w-7 justify-center  bg-sky-600 ">
          <Text className="text-center text-white">{props.requestsCount}</Text>
        </View>
      </View>
      <View>
        <Text className="text-xs text-gray-400">
          {props.categoryDescription}
        </Text>
      </View>
      {expaneded === true ? (
        <SubCategories subCategories={subCategories} />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Category;
