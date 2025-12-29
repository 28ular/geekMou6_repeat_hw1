import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
        input: ''
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload;
        },
        createTodo: (state) => {
            state.todo.push({ id: Date.now(), name: state.input, completed: false });
            state.input = '';
        },
    }
});

export const { setInput, createTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
