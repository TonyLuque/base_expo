import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/LoginScreen";
import SignUpScreen from "../screens/login/SignUp";
import RecoveryPassword from "../screens/login/RecoveryPassword";
import SignUpSuccess from "../screens/login/SignUpSuccess";

const Stack = createNativeStackNavigator();

export default OnBoardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="signUpSuccess" component={SignUpSuccess} />
      <Stack.Screen name="recoveryPassword" component={RecoveryPassword} />
    </Stack.Navigator>
  );
};
