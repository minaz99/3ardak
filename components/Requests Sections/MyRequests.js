import React from "react";
import { ScrollView, Text, View } from "react-native";
import MyRequest from "../Requests Wrappers/MyRequest";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyRequests } from "../../API calls/Requests/MyRequestsSlice";

const Myrequests = (props) => {
  return (
    <ScrollView
      horizontal={false}
      className="flex-grow p-2   divide-y-2 divide-red-300 "
      overScrollMode="never"
    >
      {props.requests.map((req) => {
        return (
          <MyRequest
            id={req.id}
            category={req.category}
            status={req.status}
            request={req.title}
          />
        );
      })}
    </ScrollView>
  );
};

export default Myrequests;
