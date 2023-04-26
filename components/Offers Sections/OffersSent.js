import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyOffers } from "../../API calls/Offers/MyOffersSlice";
import MyOfferWrapper from "../Offers Wrappers/MyOfferWrapper";

const OffersSent = (props) => {
  return (
    <ScrollView
      horizontal={false}
      className="flex-grow p-2   divide-y-2 divide-red-300 "
      overScrollMode="never"
    >
      {props.myOffers.map((offer) => {
        return (
          <MyOfferWrapper
            description={offer.description}
            status={offer.status}
            id={offer.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default OffersSent;
