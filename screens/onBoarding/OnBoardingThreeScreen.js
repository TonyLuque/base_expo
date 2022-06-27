import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import RightArrow from "../../assets/icons/RightArrow";
import AppView from "../../components/AppView";
import TextSmallNormal from "../../components/font/TextSmallNormal";
import LeftArrow from "../../assets/icons/LeftArrow";
import TextBigBold from "../../components/font/TextBigBold";
import { SaveOnBoarding } from "../../utils/SaveOnBoarding";
import Colors from "../../config/Colors";

const OnBoardingThreeScreen = ({ navigation }) => {
  const { saveWithout, saveWith } = SaveOnBoarding();
  return (
    <AppView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/onboarding3.png")}
        />
      </View>
      <TextBigBold>Ayuda a identificar al responsable</TextBigBold>
      <TextSmallNormal style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut sem
        pellentesque leo diam. Est vitae risus odio quis quis ut mauris gravida.
        Sem tincidunt etiam gravida at tristique. Tristique hendrerit in fusce
        nec, metus, sed id.
      </TextSmallNormal>
      <View style={{ marginTop: 28 }}>
        <Button
          color={Colors.primary}
          title="No volver a mostrar"
          onPress={() => saveWith()}
        />
      </View>
      <View style={styles.next}>
        <TouchableOpacity onPress={() => navigation.navigate("o2")}>
          <LeftArrow />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveWithout()}>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </AppView>
  );
};

export default OnBoardingThreeScreen;

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
  button: {},
});
