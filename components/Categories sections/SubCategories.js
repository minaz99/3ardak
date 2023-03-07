import { View, Text, ScrollView } from "react-native";
import React from "react";
import SubCategory from "./SubCategory";
const SubCategories = (props) => {
  let itemsCount = 0;
  return (
    <ScrollView className="flex-grow" horizontal={false}>
      {props.subCategories.map((sub) => {
        itemsCount = itemsCount + 1;
        return itemsCount !== props.subCategories.length ? (
          <View className="border-b border-gray-300">
            <SubCategory
              categoryName={sub.categoryName}
              requestsCount={sub.requestsCount}
            />
          </View>
        ) : (
          <View>
            <SubCategory
              categoryName={sub.categoryName}
              requestsCount={sub.requestsCount}
            />
          </View>
        );
      })}
      {/* pass a list of sub categories with properties of a normal Category (to pass them to the Category as props) as props and use for each or map and use the Category component*/}
    </ScrollView>
  );
};

export default SubCategories;
