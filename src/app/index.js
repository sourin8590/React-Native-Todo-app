import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/images/icon.png";
import { screenHeight, screenWidth } from "../utils/Constants";
import { resetAndNavigate } from "../utils/Helpers";

const Main = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [hasNavigated, setHasNavigater] = useState(false);

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeOutId = setTimeout(() => {
        resetAndNavigate("/home");
      }, 1000);
      
      return () => clearTimeout(timeOutId);
    }
  }, [loaded, hasNavigated]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ffffff",
  },
  img: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.12,
  },
});

export default Main;
