import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomePage() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <SafeAreaView>
      <Text>HomePage</Text>
    </SafeAreaView>
  );
}

export default HomePage;
