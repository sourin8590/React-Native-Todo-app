import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0090b0",
    alignSelf: "center",
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
  },
});

export default CustomButton;
