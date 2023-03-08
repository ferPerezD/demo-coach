import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SomeState {
  someData: string
}

const initialState: SomeState = {
    someData: "",
}

export const slice = createSlice({
  name: 'someState',
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<string>) => {
      state.someData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeData } = slice.actions

export default slice.reducer