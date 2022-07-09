import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import * as Notifications from "expo-notifications";
import Context from "../../utils/Context";
import Storage from "../../utils/Storage";
import { postData } from "../../utils/FetchData";

const LoginScreen = () => {
  const { setToken, setOn } = useContext(Context);
  const [getDeviceId, setDeviceId] = useState();

  (async () => {
    const deviceId = (await Notifications.getDevicePushTokenAsync()).data;
    setDeviceId(deviceId);
  })();

  async function login() {
    try {
      const data = await postData({
        urlPath: "/user/login",
        body: {
          email: "email@hotmail.com",
          password: "",
          deviceId: getDeviceId,
        },
      });

      if (!(await Storage.GetOnBoarding())) {
        setOn(false);
      }

      await Storage.SetOnToken(data);
      setToken(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AppView>
      <TextMediumNormal>Login</TextMediumNormal>
      <Button title="Login" onPress={login} />
    </AppView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
