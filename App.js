import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BASE_URL_GRAPHQL } from "@env";
import { expirationDate } from "./utils/decodeJWT";

import { NavigationContainer } from "@react-navigation/native";
import OnBoardingNavigation from "./navigation/OnBoardingNavigation";
import TabNavigator from "./navigation/TabNavigator";
import Context from "./utils/Context";
import Storage from "./utils/Storage";
import * as SplashScreen from "expo-splash-screen";
import LoginNavigation from "./navigation/LoginNavigation";

import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  const [on, setOn] = useState();
  const [token, setToken] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState(null);

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

          const payload = await expirationDate(setToken);
          setUserData(payload);
        }
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.error(error);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const httpLink = createHttpLink({
    uri: BASE_URL_GRAPHQL,
  });

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await Storage.GetOnToken();
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

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
        <Image source={require("./assets/pulpi.gif")} />
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ on, setOn, token, setToken, userData }}>
        <RootSiblingParent>
          <NavigationContainer>
            {!token ? (
              <LoginNavigation />
            ) : token && on ? (
              <TabNavigator />
            ) : (
              <OnBoardingNavigation />
            )}
          </NavigationContainer>
        </RootSiblingParent>
      </Context.Provider>
    </ApolloProvider>
  );
}
