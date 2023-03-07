import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NewCategoryDesign = (props) => {
  const navigation = useNavigation();
  return (
    <CategoryCard
      titleText={props.categoryName}
      descriptionText={props.descriptionText}
      count={props.requestsCount}
      disableRightButton
      titleColor="#E8B730"
      descriptionColor="#edd695"
      onPress={() => navigation.navigate("HomePage")}
    />
  );
};

export default NewCategoryDesign;
