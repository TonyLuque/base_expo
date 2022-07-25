import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import { postData } from "../../utils/FetchData";
import AppTextInput from "../../components/textInputs/TextInput";
import { useToastError } from "../../hooks/useToastError";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import { useToastSuccess } from "../../hooks/useToastSuccess";

const RecoveryPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  async function recoveryPassword(email, password) {
    try {
      const data = await postData({
        urlPath: "/user/resetPassword",
        body: {
          email: email,
          password: password,
        },
      });

      if (data) {
        useToastSuccess("Email enviado");
        navigation.navigate("login");
      }
    } catch (error) {
      console.error(error);
      useToastError(error.message);
    }
  }

  return (
    <AppView>
      <TextMediumNormal>Recuperar Contraseña</TextMediumNormal>
      <TextSmallNormal>
        Enviaremos un enlace al email ingresado.
      </TextSmallNormal>
      <AppTextInput
        label="Email"
        onChangeText={setEmail}
        value={email}
        placeholder="email@domain.com"
        keyboardType="email-address"
      />
      <Button title="Sign Up" onPress={() => recoveryPassword(email)} />
    </AppView>
  );
};

export default RecoveryPassword;

const styles = StyleSheet.create({});
