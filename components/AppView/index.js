import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const AppView = ({ children, otherStyles, ...othersProps }) => {
  return (
    <SafeAreaView style={[styles.container, { ...otherStyles }]} othersProps>
      {children}
    </SafeAreaView>
  );
};

export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
