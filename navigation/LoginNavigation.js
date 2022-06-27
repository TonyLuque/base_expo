import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/LoginScreen";

const Stack = createNativeStackNavigator();

export default OnBoardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
