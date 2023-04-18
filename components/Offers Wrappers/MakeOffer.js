import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import Request from "../Requests Wrappers/Request";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { makeOffer } from "../../API calls/Offers/MakeOfferSlice";
import { useEffect } from "react";

const MakeOffer = (props) => {
  const dispatch = useDispatch();
  const { token, id } = useSelector((store) => store.login);
  const { isSuccess } = useSelector((store) => store.makeOffer);
  const [description, setDescription] = useState("");
  const [offerPrice, setOfferPrice] = useState(0);
  useEffect(() => {
    if (isSuccess) setOfferPrice(false);
  }, [isSuccess]);
  return (
    <View className="bg-sky-200 flex-col rounded-xl p-2 h-full  ">
      <View className="items-center pb-2 flex-row">
        <View className="flex-1 "></View>
        <TouchableOpacity
          className="pt-2"
          onPress={() => props.setShowMakeOffer(false)}
        >
          <XCircleIcon className=" w-16 h-16" color={"black"} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={false}
        className="flex-grow  space-y-6 "
        overScrollMode="never"
      >
        <Request
          id={props.reqObject.id}
          name={props.reqObject.requesteeName}
          title={props.reqObject.title}
          request={props.reqObject.description}
          category={props.reqObject.category}
          showMakeOffer={props.showMakeOffer}
        />

        <View className="bg-sky-600/60 rounded-xl p-2 flex-grow">
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Description of offer to the request"
            multiline={true}
            maxLength={100}
          />
        </View>
        <View className="bg-sky-600/60 rounded-xl p-2 flex-grow">
          <TextInput
            value={offerPrice}
            onChangeText={setOfferPrice}
            keyboardType="numeric"
            placeholder={"Price in KD"}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() =>
            dispatch(
              makeOffer({
                token,
                id,
                reqID: props.reqObject.id,
                description: description + ", " + offerPrice + " KD",
              })
            )
          }
          className="p-4  bg-white rounded-lg text-sm "
        >
          <Text className="font-bold w-full text-center text-black">
            Send offer
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MakeOffer;
