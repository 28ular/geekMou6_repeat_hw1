import {create} from "zustand";

export const useTodo = create((set) => ({
    todo: [],
    input: '',

    setInput: (value) => set({input: value}),


    createTodo: (name) => set((state) => ({
        todo: [
            ...state.todo,
            {id: Date.now() , name , completed: false},
        ],

        input: ''
    }))



}))