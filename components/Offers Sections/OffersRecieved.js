import { View, Text, ScrollView } from "react-native";
import React from "react";
import OfferRecieved from "../Offers Wrappers/OfferRecieved";

const OffersRecieved = (props) => {
  return (
    <ScrollView
      horizontal={false}
      className="p-2 mb-16 "
      overScrollMode="never"
    >
      {props.offers.map((offer) => {
        return (
          <OfferRecieved
            description={offer.description}
            status={offer.status}
            id={offer.id}
            offerPrice={offer.offerPrice}
            offereeName={offer.offereeName}
            token={props.token}
            reqID={props.reqID}
            userID={props.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default OffersRecieved;
