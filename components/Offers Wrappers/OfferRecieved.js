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
import { useDispatch } from "react-redux";
import { acceptOffer } from "../../API calls/Offers/AcceptOfferSlice";
import { rejectOffer } from "../../API calls/Offers/RejectOfferSlice";

const OfferRecieved = (props) => {
  const dispatch = useDispatch();
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
          <TouchableOpacity
            onPress={() =>
              dispatch(
                acceptOffer({
                  token: props.token,
                  id: props.userID,
                  reqID: props.reqID,
                  offerID: props.id,
                })
              )
            }
          >
            <CheckCircleIcon width={30} height={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              dispatch(
                rejectOffer({
                  token: props.token,
                  reqID: props.reqID,
                  offerID: props.id,
                })
              )
            }
          >
            <XCircleIcon width={30} height={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OfferRecieved;
