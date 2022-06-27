import { useEffect } from "react";

import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";

export async function IntoGallery({ setImage }) {
  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Hola", "Debes permitir el ingreso a la galería.");
        }
      }
    };
  }, []);

  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  } catch (error) {}
}
