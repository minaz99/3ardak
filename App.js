import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Categories from "./screens/Categories";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import MyRequests from "./screens/MyRequests";
import Offers from "./screens/Offers";
import Register from "./screens/Register";
import WelcomePage from "./screens/WelcomePage";
import Requests from "./screens/Requests";
import store from "./store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="WelcomePage">
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Offers" component={Offers} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="MyRequests" component={MyRequests} />
          <Stack.Screen name="Requests" component={Requests} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
