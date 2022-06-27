import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";

import Context from "../../utils/Context";
import Storage from "../../utils/Storage";

const LoginScreen = () => {
  const { setToken, setOn } = useContext(Context);

  async function login() {
    if (!(await Storage.GetOnBoarding())) {
      setOn(false);
    }

    await Storage.SetOnToken("12345");
    setToken(true);
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
