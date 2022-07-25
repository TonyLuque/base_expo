import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import Storage from "../../utils/Storage";
import { postData } from "../../utils/FetchData";
import AppTextInput from "../../components/textInputs/TextInput";
import { useToastError } from "../../hooks/useToastError";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp(email, password) {
    try {
      const data = await postData({
        urlPath: "/user/signup",
        body: {
          email: email,
          password: password,
        },
      });

      if (data) {
        navigation.navigate("signUpSuccess");
      }
    } catch (error) {
      console.error(error);
      useToastError(error.message);
    }
  }

  return (
    <AppView>
      <TextMediumNormal>Crear Cuenta</TextMediumNormal>
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
      <Button title="Sign Up" onPress={() => signUp(email, password)} />
    </AppView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
