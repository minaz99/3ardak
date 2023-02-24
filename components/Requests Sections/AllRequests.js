import { View } from "react-native";
import React from "react";
import Request from "../Requests Wrappers/Request";
const AllRequests = () => {
  return (
    <View>
      <Request
        name="Mina Hany"
        category="Home appliances"
        phonenumber="97414996"
        request="Need someone to fix my fridge, fridge model is F45GHK Casio"
      />
      <Request
        name="Hany Farah"
        category="Electronics"
        phonenumber="66675275"
        request="Laptop is not switching on maybe it requires new battery or problem in power supply, might also require restore and installing some new updates and applications"
      />
      <Request
        name="Neveen Wageh"
        category="Home decoration"
        phonenumber="66450689"
        request="I am looking for someone who can paint the kitchen wall using colors given in the description, more details will be given on contact info"
      />
      <Request
        name="Kirollos Hany"
        category="Construction"
        phonenumber="66235529"
        request="I am looking for 2 construction workers who can come and help with construction in Salmiya, exact address will be given on contact"
      />
    </View>
  );
};

export default AllRequests;
