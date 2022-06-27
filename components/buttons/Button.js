import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Colors from "../../config/Colors";

const Button = ({ title, iconLeft, iconRight, line, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, line ? styles.line : styles.noLine]}
      onPress={onPress}
    >
      {iconLeft}
      <Text style={line ? styles.textLine : styles.textNoLine}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  line: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  noLine: {
    backgroundColor: Colors.primary,
  },
  textLine: {
    color: Colors.primary,
    marginLeft: 16,
    fontSize: 16,
  },
  textNoLine: {
    color: Colors.whiteClear,
    marginLeft: 16,
    fontSize: 16,
  },
});
