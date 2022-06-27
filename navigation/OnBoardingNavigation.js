import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onBoarding/WelcomeScreen";
import OnBoardingOneScreen from "../screens/onBoarding/OnBoardingOneScreen";
import OnBoardingTwoScreen from "../screens/onBoarding/OnBoardingTwoScreen";
import OnBoardingThreeScreen from "../screens/onBoarding/OnBoardingThreeScreen";

const Stack = createNativeStackNavigator();

export default OnBoardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="o1" component={OnBoardingOneScreen} />
      <Stack.Screen name="o2" component={OnBoardingTwoScreen} />
      <Stack.Screen name="o3" component={OnBoardingThreeScreen} />
    </Stack.Navigator>
  );
};
