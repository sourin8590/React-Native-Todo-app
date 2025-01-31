import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <Provider store={store}>
      {/* for redux*/}
      {/* for redux persist */}
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          style="light"
          backgroundColor="#0090b0"
          translucent={false}
        />

        {/*used for coloring notification bar */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="addtodo" />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
