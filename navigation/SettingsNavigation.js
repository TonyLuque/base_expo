import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/settings/SettingsScreen";

const Stack = createNativeStackNavigator();

export default SettingsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: "" }}
      initialRouteName="SettingsScreen"
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
