import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import * as Notifications from "expo-notifications";
import Context from "../../utils/Context";
import Storage from "../../utils/Storage";
import { postData } from "../../utils/FetchData";
import AppTextInput from "../../components/textInputs/TextInput";

const LoginScreen = () => {
  const { setToken, setOn } = useContext(Context);
  const [getDeviceId, setDeviceId] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {
      const deviceId = (await Notifications.getDevicePushTokenAsync()).data;
      setDeviceId(deviceId);
    })();
  }, []);

  async function login(email, password) {
    try {
      const data = await postData({
        urlPath: "/user/login",
        body: {
          email: email,
          password: password,
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
      <AppTextInput
        label="Email"
        onChangeText={setEmail}
        value={email}
        placeholder="email@domain.com"
        keyboardType="email-address"
      />
      <AppTextInput
        label="Contraseña"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => login(email, password)} />
    </AppView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
