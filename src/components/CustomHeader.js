import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = ({ title, isBackButton }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <Text style={styles.text}>{title}</Text>
        {isBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back-circle" size={32} color={"#fff"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0090b0",
    padding: "15",
  },
  text: {
    fontSize: 22,
    fontFamily: "SpaceMono",
    textAlign: "center",
    color: "#ffffff",
  },
  backButton: {
    position: "absolute",
    bottom: 0,
  },
});

export default CustomHeader;
