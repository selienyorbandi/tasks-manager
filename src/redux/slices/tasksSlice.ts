import { ITask } from "./../../models/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      const selectedTask = state.find(task => task.id === action.payload.id);
      if (selectedTask) selectedTask.completed = !selectedTask.completed;
    },
    selectTask: (state, action) => {
      const nonSelectedTasks = state;
      nonSelectedTasks.forEach(task => task.selected = false);
      const selectedTask = state.find(task => task.id === action.payload.id);
      if (selectedTask) selectedTask.selected = !selectedTask.selected;
    }
  },
});

export const { addTask, deleteTask, completeTask, selectTask } = tasksSlice.actions;
export default tasksSlice.reducer;
