import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../API calls/Requests/MakeRequestSlice";
import { useState } from "react";

const CreateRequest = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <View className="rounded-xl flex-col p-2  bg-sky-100">
      <View className="flex-row p-1">
        <View className="flex-1"></View>
        <TouchableOpacity
          className="pt-2"
          onPress={() => props.setMakeRequest(false)}
        >
          <XCircleIcon className="w-16 h-16" color={"black"} />
        </TouchableOpacity>
      </View>
      <Text className="tracking-widest text-lg text-center">New Request</Text>
      <View className="flex-row p-2">
        <TextInput
          editable={false}
          value={props.category}
          className="bg-sky-200 rounded-lg w-full p-1  text-black"
        ></TextInput>
      </View>
      <View className="flex-row p-2">
        <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
          className="bg-sky-200 rounded-lg p-1 w-full  text-black"
        ></TextInput>
      </View>
      <View className="flex-row p-2">
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          className="bg-sky-200 rounded-lg w-full p-1  text-black"
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={() =>
          dispatch(
            makeRequest({
              token: props.token,
              id: props.id,
              category: props.category,
              description: description,
              title: title,
            })
          )
        }
        className="rounded-xl  bg-black p-2 w-6/12 mx-auto my-4"
      >
        <Text className="text-lg text-center  text-white">Make request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRequest;
