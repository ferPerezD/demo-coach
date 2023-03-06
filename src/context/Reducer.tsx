import { CHANGE_DATA } from "./constants"
import { initialState } from "./Provider"


type Actions = {type: 'CHANGE_DATA', payload: string}


export const Reducer = (state = initialState, actions: Actions) => {

    switch(actions.type){
        case CHANGE_DATA:
            return {
                ...state,
                someState: actions.payload
            }
            default:
                return state
    }

}