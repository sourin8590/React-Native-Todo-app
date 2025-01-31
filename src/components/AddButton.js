import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const AddButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.navigate("/addtodo")}
    >
      <MaterialCommunityIcons name="plus" size={32} color={"#fff"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    right: 25,
    padding: 10,
    backgroundColor: "#0090b0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
    borderRadius: 100,
  },
});

export default AddButton;
