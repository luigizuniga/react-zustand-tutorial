import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';


interface IBook {
    amount : number,
    title: string,
    updateAmount: (newAmount: number ) => void
}

export const useBookStore = create<IBook>((set, get) => ({
    amount: 35,
    title: "Alice's Adventures in Wonderland",
    // updateAmount: (newAmount: number) => set({ amount: newAmount }),
    updateAmount: (newAmount: number) => { 
        const amountState = get().amount
        set({ amount: newAmount + amountState }) 
    },
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useBookStore);
  }