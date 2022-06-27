import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuickComplaintScreen from "../screens/report/QuickComplaintScreen";
import PreviewScreen from "../screens/report/PreviewScreen";
import QuickFormCameraScreen from "../screens/report/QuickFormCameraScreen";
import QuickFinishScreen from "../screens/report/QuickFinishScreen";

const Stack = createNativeStackNavigator();

export default ReportNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: "" }}
      initialRouteName="QuickComplaintScreen"
    >
      <Stack.Screen
        name="QuickComplaintScreen"
        component={QuickComplaintScreen}
      />
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      <Stack.Screen
        name="QuickFormCameraScreen"
        component={QuickFormCameraScreen}
      />
      <Stack.Screen name="QuickFinishScreen" component={QuickFinishScreen} />
    </Stack.Navigator>
  );
};
