import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";
import AppView from "../../components/AppView";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import LeftArrow from "../../assets/icons/LeftArrow";
import TextBigBold from "../../components/font/TextBigBold";

const OnBoardingOneScreen = ({ navigation }) => {
  return (
    <AppView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/onboarding1.png")}
        />
      </View>
      <TextBigBold>Sube un video o una fotografía</TextBigBold>
      <TextSmallNormal style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut sem
        pellentesque leo diam. Est vitae risus odio quis quis ut mauris gravida.
        Sem tincidunt etiam gravida at tristique. Tristique hendrerit in fusce
        nec, metus, sed id.
      </TextSmallNormal>
      <View style={styles.next}>
        <TouchableOpacity onPress={() => navigation.navigate("welcomeScreen")}>
          <LeftArrow />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("o2")}>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </AppView>
  );
};

export default OnBoardingOneScreen;

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
  next: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 56,
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
  },
});
