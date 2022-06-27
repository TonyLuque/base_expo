import React from "react";
import RightArrow from "../../assets/icons/RightArrow";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextMediumNormal from "../../components/font/TextMediumNormal";

const QuickFormCameraScreen = ({ navigation, route }) => {
  const { image } = route.params;
  return (
    <AppView>
      <TextMediumNormal>Detalles de los hechos</TextMediumNormal>

      <Button
        title="Siguiente"
        line
        iconRight={<RightArrow />}
        onPress={() => navigation.navigate("QuickFinishScreen")}
      />
    </AppView>
  );
};

export default QuickFormCameraScreen;
