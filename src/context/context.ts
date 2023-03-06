import { createContext } from "react";

export interface GlobalState {
    someState: string,
    changeState: (newDataToState: string) => void
} 


export const Context = createContext({} as GlobalState)