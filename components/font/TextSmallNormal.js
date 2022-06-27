import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../config/Colors";

const TextSmallNormal = ({ children, style, primary, ...otherProps }) => {
  return (
    <Text
      style={[styles.text, primary && { color: Colors.primary }, { ...style }]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default TextSmallNormal;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 24,
  },
});
