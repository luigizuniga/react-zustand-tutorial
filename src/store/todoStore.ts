import create from "zustand";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../model/Todo";


interface TodoState {
    todos: Todo[];
    addTodo: ( description: string) => void;
    // removeTodo: ( id: string ) => void;
    // toggleCompletedState: ( id: string ) => void;
}

export const useStore = create<TodoState>((set) => ({
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
}));