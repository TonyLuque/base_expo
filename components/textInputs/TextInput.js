import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const AppTextInput = ({
  children,
  style,
  label,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  ...otherProps
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
        //style={[styles.text, { ...style }]}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
});
