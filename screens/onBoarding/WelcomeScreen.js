import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";
import AppView from "../../components/AppView";
import TextBigBold from "../../components/font/TextBigBold";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import Colors from "../../config/Colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/welcome.png")}
        />
      </View>
      <TextBigBold>Bienvenido a Denuncia cuidadana</TextBigBold>
      <TextSmallNormal>Lorem ipsum dolor sit amet</TextSmallNormal>
      <TouchableOpacity
        style={styles.next}
        onPress={() => navigation.navigate("o1")}
      >
        <TextMediumNormal style={{ color: Colors.primary, marginRight: 10 }}>
          Comenzar
        </TextMediumNormal>
        <RightArrow />
      </TouchableOpacity>
    </AppView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: 300,
    marginBottom: 56,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  next: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 56,
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
  },
});
