import { useReducer } from "react"
import { CHANGE_DATA } from "./constants"
import { Context } from "./context"
import { Reducer } from "./Reducer"
 
export const initialState = {
    someState: ''
}

export const Provider = ({children}: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    const changeState = (newDataToState: string) => {
        dispatch({type: CHANGE_DATA, payload: newDataToState})
    }

    return(
        <Context.Provider value={{
            ...state,
            changeState
        }}>
            {children}
        </Context.Provider>
    )

}