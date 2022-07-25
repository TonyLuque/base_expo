import React from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextBigBold from "../../components/font/TextBigBold";
import TextMediumNormal from "../../components/font/TextMediumNormal";

const SignUpSuccess = ({ navigation }) => {
  return (
    <AppView>
      <TextBigBold>Felicitaciones</TextBigBold>
      <TextMediumNormal>
        Cuenta creada con éxito, ahora puedes ingresar.
      </TextMediumNormal>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("login")}
      />
    </AppView>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({});
