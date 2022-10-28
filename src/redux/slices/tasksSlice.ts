import { ITasksSlice } from "./../../models/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITasksSlice = {
  urgent: [],
  high: [],
  medium: [],
  low: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state[action.payload.priority as keyof ITasksSlice].push(action.payload);
    },
    deleteTask: (state, action) => {
      state[action.payload.priority as keyof ITasksSlice] = state[
        action.payload.priority as keyof ITasksSlice
      ].filter(task => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      const selectedTask = state[action.payload.priority as keyof ITasksSlice].find(
        task => task.id === action.payload.id
      );
      if (selectedTask) selectedTask.completed = !selectedTask.completed;
    },
    selectTask: (state, action) => {
      state[action.payload.priority as keyof ITasksSlice].forEach(task => {
        if (task.id !== action.payload.id) {
          task.selected = false;
        } else {
          task.selected = !task.selected;
        }
      });
    },
    reOrderTask: (state, action) => {
      const [removed] = state[action.payload.sourcePriority as keyof ITasksSlice].splice(
        action.payload.sourceIndex,
        1
      );
      removed.priority = action.payload.destinationPriority;
      state[action.payload.destinationPriority as keyof ITasksSlice].splice(
        action.payload.destinationIndex,
        0,
        removed
      );
    },
  },
});

export const { addTask, deleteTask, completeTask, selectTask, reOrderTask } = tasksSlice.actions;
export default tasksSlice.reducer;
