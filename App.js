import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingNavigation from "./navigation/OnBoardingNavigation";
import TabNavigator from "./navigation/TabNavigator";
import Context from "./utils/Context";
import Storage from "./utils/Storage";
import * as SplashScreen from "expo-splash-screen";
import LoginNavigation from "./navigation/LoginNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [on, setOn] = useState();
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const onBoarding = await Storage.GetOnBoarding();
        if (onBoarding) {
          setOn(onBoarding);
        }

        const token = await Storage.GetOnToken();
        if (token) {
          setToken(token);
        }
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text>SplashScreen Demo! 👋</Text>
      </View>
    );
  }

  return (
    <Context.Provider value={{ on, setOn, token, setToken }}>
      <NavigationContainer>
        {!token ? (
          <LoginNavigation />
        ) : token && on ? (
          <TabNavigator />
        ) : (
          <OnBoardingNavigation />
        )}
      </NavigationContainer>
    </Context.Provider>
  );
}
