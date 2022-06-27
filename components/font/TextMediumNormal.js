import React from "react";
import { Text, StyleSheet } from "react-native";

const TextMediumNormal = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, { ...style }]} {...otherProps}>
      {children}
    </Text>
  );
};

export default TextMediumNormal;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});
