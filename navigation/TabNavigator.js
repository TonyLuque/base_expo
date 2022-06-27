import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconHome from "../assets/icons/IconHome";
import IconPhone from "../assets/icons/IconPhone";
import IconCamera from "../assets/icons/IconCamera";
import IconSetting from "../assets/icons/IconSetting";
import TextSmallNormal from "../components/font/TextSmallNormal";
import HomeNavigation from "./HomeNavigation";
import TextMediumNormal from "../components/font/TextMediumNormal";
import AppView from "../components/AppView";
import ReportNavigation from "./ReportNavigation";
import SettingsNavigation from "./SettingsNavigation";

const Tab = createBottomTabNavigator();

const DefaultScreen = () => {
  return (
    <AppView>
      <TextMediumNormal>Naita</TextMediumNormal>
    </AppView>
  );
};

export default TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconHome focus={focused} />
            ) : (
              <TextSmallNormal style={{ marginBottom: 0 }} primary>
                Inicio
              </TextSmallNormal>
            ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="call"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconPhone focus={focused} />
            ) : (
              <TextSmallNormal style={{ marginBottom: 0 }} primary>
                Llamar
              </TextSmallNormal>
            ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="report"
        component={ReportNavigation}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconCamera focus={focused} />
            ) : (
              <TextSmallNormal style={{ marginBottom: 0 }} primary>
                Denunciar
              </TextSmallNormal>
            ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsNavigation}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconSetting focus={focused} />
            ) : (
              <TextSmallNormal style={{ marginBottom: 0 }} primary>
                Configuración
              </TextSmallNormal>
            ),
          tabBarLabel: () => false,
        }}
      />
    </Tab.Navigator>
  );
};
