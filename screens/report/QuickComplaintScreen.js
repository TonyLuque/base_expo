import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import IconCamera from "../../assets/icons/IconCamera";
import IconUpload from "../../assets/icons/IconUpload";
import AppView from "../../components/AppView";
import Button from "../../components/buttons/Button";
import TextBigBold from "../../components/font/TextBigBold";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import Colors from "../../config/Colors";

import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";
import { IntoGalery } from "../../utils/Galery";

const QuickComplaintScreen = ({ navigation }) => {
  const Galery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.cancelled) {
        navigation.navigate("PreviewScreen", {
          image: result,
        });
      }
    } catch (error) {}
  };

  const Camera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.cancelled) {
        navigation.navigate("PreviewScreen", {
          image: result,
        });
      }
    } catch (error) {}
  };

  return (
    <AppView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/QuickComplaint.png")}
        />
      </View>
      <TextBigBold>Modo Rapido de denuncias</TextBigBold>
      <TextSmallNormal style={{ textAlign: "center" }}>
        Sabemos que el tiempo es crucial por ello, siempre que ingreses a la
        aplicación tendras la opción de grabar y subir cualquier denuncia.
      </TextSmallNormal>
      <Button
        title="Graba o toma una fotografía"
        iconLeft={<IconCamera color={Colors.whiteClear} />}
        onPress={Camera}
      />

      <Button
        title="Subir video o fotografía"
        iconLeft={<IconUpload />}
        line
        onPress={Galery}
      />
    </AppView>
  );
};

export default QuickComplaintScreen;

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
