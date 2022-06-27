import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";

import Context from "../../utils/Context";
import Storage from "../../utils/Storage";

const LoginScreen = () => {
  const { setToken } = useContext(Context);
  return (
    <AppView>
      <TextMediumNormal>Login</TextMediumNormal>
      <Button
        title="Login"
        onPress={async () => {
          await Storage.SetOnToken("12345");
          setToken(true);
        }}
      />
    </AppView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
