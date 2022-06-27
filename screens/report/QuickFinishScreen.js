import React from "react";
import AppView from "../../components/AppView";
import TextMediumNormal from "../../components/font/TextMediumNormal";

const QuickFinishScreen = ({ navigation }) => {
  return (
    <AppView>
      <TextMediumNormal>Denuncia recibida</TextMediumNormal>
      <TextMediumNormal onPress={() => navigation.navigate("home")}>
        Volver al inicio
      </TextMediumNormal>
    </AppView>
  );
};

export default QuickFinishScreen;
