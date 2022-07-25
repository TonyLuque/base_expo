import Toast from "react-native-root-toast";

export function useToastSuccess(message) {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: 50,
    shadow: true,
    animation: false,
    hideOnPress: true,
  });
}
