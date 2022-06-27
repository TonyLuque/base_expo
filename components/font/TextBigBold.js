import React from "react";
import { StyleSheet, Text } from "react-native";

const TextBigBold = ({ children, style, ...otherProps }) => {
  return (
    <Text {...otherProps} style={[styles.text, { ...style }]}>
      {children}
    </Text>
  );
};

export default TextBigBold;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
});
