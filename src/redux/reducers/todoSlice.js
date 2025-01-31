import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, desc } = action.payload; // Access payload correctly
      const todoData = {
        id: state.data.length + 1, // Use state.data.length directly
        title,
        desc,
      };
      state.data = [todoData, ...state.data]; // Add new todo to the beginning of the array
    },
    deleteTodo: (state, action) => {
      // Use filter to create a new array without the deleted todo
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, title, desc } = action.payload;
      const index = state.data?.findIndex((i) => i.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], title, desc };
      }
    },
  },
});

// Export the action creators
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

// Export the reducer as default
export default todoSlice.reducer;
