import create from "zustand";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../model/Todo";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface TodoState {
    todos: Todo[];
    addTodo: ( description: string) => void;
    removeTodo: ( id: string ) => void;
    toggleCompletedState: ( id: string ) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: ( description: string ) => {
        set( (state) => ({
            todos: [
                ...state.todos,
                {
                    id: uuidv4(),
                    description,
                    completed: false,
                } as Todo,
            ]
        }));
    },
    removeTodo: (id) => {
     set((state)=>({
        todos: state.todos.filter((todo)=> todo.id !== id)
     }));
    }, 
    toggleCompletedState(id) {
        set((state)=>({
            todos: state.todos.map((todo) => 
                todo.id == id ? ({ ...todo, completed: !todo.completed } as Todo)
                : todo
            ),
        }));
    },
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useTodoStore);
}