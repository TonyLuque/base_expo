import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";

import Context from "../../utils/Context";
import Storage from "../../utils/Storage";

const LoginScreen = () => {
  const { setToken, setOn } = useContext(Context);
  return (
    <AppView>
      <TextMediumNormal>Cerrar Sesión</TextMediumNormal>
      <Button
        title="Cerrar Sesión"
        onPress={async () => {
          await Storage.RemoveOnToken();
          setToken(false);
        }}
      />
      <TextMediumNormal>Mostrar OnBoarding</TextMediumNormal>
      <Button
        title="Mostrar"
        onPress={async () => {
          await Storage.RemoveOnBoarding();
        }}
      />
    </AppView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
