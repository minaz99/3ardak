import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOffersPerRequest } from "../../API calls/Offers/OffersPerRequestSlice";
import OffersRecieved from "./OffersRecieved";
import { XCircleIcon } from "react-native-heroicons/solid";

const OffersPerRequest = (props) => {
  const dispatch = useDispatch();
  const { offers, offersCount } = useSelector(
    (store) => store.offersPerRequest
  );
  useEffect(() => {
    dispatch(
      getOffersPerRequest({
        token: props.token,
        id: props.id,
        reqID: props.reqID,
      })
    );
  }, []);
  return (
    <View className="bg-sky-100 flex-col rounded-xl flex-grow ">
      <View className="items-center pb-2  p-2 flex-row">
        <View className="flex-1 "></View>
        <TouchableOpacity
          className="pt-2"
          onPress={() => props.setShowOffers(false)}
        >
          <XCircleIcon className="w-16 h-16" color={"black"} />
        </TouchableOpacity>
      </View>
      <View className="-mt-4">
        <OffersRecieved
          token={props.token}
          id={props.id}
          reqID={props.reqID}
          offers={offers}
        />
      </View>
    </View>
  );
};

export default OffersPerRequest;
