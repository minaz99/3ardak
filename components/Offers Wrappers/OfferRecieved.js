import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  BanknotesIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  UserCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";

const OfferRecieved = (props) => {
  return (
    <View key={props.id} className="my-2 ">
      <ImageBackground
        source={require("../../src/watercolor-light-steel-blue-wallpaper-image.jpg")}
        resizeMode="cover"
        borderRadius={15}
        className="p-2 space-y-2 "
      >
        <View className="flex-row space-x-2 items-center">
          <UserCircleIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.offereeName}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <InformationCircleIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.description}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <BanknotesIcon className="w-16 h-16" color={"white"} />
          <Text className="text-white text-sm flex-shrink overflow-y-scroll">
            {props.offerPrice} KD
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center mx-auto">
          <TouchableOpacity>
            <CheckCircleIcon width={30} height={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <XCircleIcon width={30} height={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OfferRecieved;
