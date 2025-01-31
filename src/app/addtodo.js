import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomHeader from "../components/CustomHeader";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async () => {
    if (value.trim() === "" || description.trim() === "") {
      Alert.alert("Please fill in all details!");
      return;
    }
    await dispatch(addTodo({ title: value, desc: description }));
    router.back();
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title={"Add new todo"}
        isBackButton={true}
        onBackPress={() => router.back()}
      />

      <TextInput
        value={value}
        onChangeText={setValue}
        style={[styles.input, styles.morePadding]}
        placeholder="Enter your todo here..."
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={120}
        style={[styles.input, styles.minHeight]}
        placeholder="Enter your todo description..."
      />

      <CustomButton title={"ADD"} onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  morePadding: {
    marginTop: 20,
  },
  minHeight: {
    minHeight: 120,
  },
});

export default AddTodo;
