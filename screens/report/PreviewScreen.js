import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import RightArrow from "../../assets/icons/RightArrow";

const PreviewScreen = ({ navigation, route }) => {
  const { image } = route.params;
  console.log(image);
  return (
    <AppView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image.uri }} />
      </View>
      <Button title="Intentar otra" onPress={() => navigation.pop()} />
      <TextMediumNormal>Sube tu fotografía</TextMediumNormal>
      <TextSmallNormal>
        Si ves que en este formato se ve claramente el delito en cuestion,
        continua con el proceso y realiza la denuncia.
      </TextSmallNormal>
      <Button
        title="Siguiente"
        iconRight={<RightArrow />}
        line
        onPress={() =>
          navigation.navigate("QuickFormCameraScreen", {
            image: image,
          })
        }
      />
    </AppView>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: 300,
    marginBottom: 24,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
