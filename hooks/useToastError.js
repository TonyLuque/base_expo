import Toast from "react-native-root-toast";

export function useToastError(errorMessage) {
  Toast.show(errorMessage, {
    duration: Toast.durations.LONG,
    position: 50,
    shadow: true,
    animation: false,
    hideOnPress: true,
  });
}
