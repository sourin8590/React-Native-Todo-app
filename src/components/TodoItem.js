import { View, Text, StyleSheet, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/reducers/todoSlice";
import CustomButton from "../components/CustomButton";

const TodoItem = ({ item }) => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState(item?.title);
  const [description, setDescription] = useState(item?.desc);

  const dispatch = useDispatch();

  const deleteHandler = async () => {
    dispatch(deleteTodo({ id: item?.id }));
  };

  const updateHandler = async () => {
    dispatch(updateTodo({ id: item?.id, title: value, desc: description })); // Fixed title reference
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>{item?.desc}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="pencil-circle"
          size={32}
          color={"#007AFF"}
          onPress={() => setVisible(true)}
        />
        <Ionicons
          onPress={deleteHandler}
          name="trash-sharp"
          size={32}
          color={"red"}
        />
      </View>

      {/* Modal for Editing */}
      <Modal
        visible={visible}
        transparent={true} // Ensure it overlays the screen properly
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        animationType={"slide"}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Ionicons
              name="close-circle"
              size={24}
              style={styles.closeIcon}
              onPress={() => setVisible(false)}
              color={"red"}
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
            <CustomButton title={"UPDATE"} onPress={updateHandler} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    backgroundColor: "#f2f2f2",
    margin: 10, // Fixed incorrect string value
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  desc: {
    fontSize: 14,
    color: "#888",
    textAlign: "left",
  },
  infoContainer: {
    width: "70%",
  },
  iconContainer: {
    width: "25%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)", // Removed "red"
    justifyContent: "center",
    alignItems: "center",
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
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    width: "90%",
  },
  closeIcon: {
    position: "absolute",
    right: 10,
    top: 10
  },
});

export default TodoItem;
