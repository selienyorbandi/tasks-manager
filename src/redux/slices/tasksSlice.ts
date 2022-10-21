import { ITask, Priority } from './../../models/ITask';
import { createSlice } from "@reduxjs/toolkit";

const initialState : ITask[] = [];

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
            if(selectedTask) selectedTask.completed = !selectedTask.completed;
        }
    }
})

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;
export default tasksSlice.reducer;