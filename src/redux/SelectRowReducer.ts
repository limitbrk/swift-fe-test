import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DataType } from "../model/Datatable"

// Part 2
export interface SelectRowInitialState {
    keys: React.Key[]
}
const initialState: SelectRowInitialState = {
    keys: []
}

// Part 3
export const datatableSlice = createSlice({
    name: 'selectRow',
    initialState,
    reducers: {
        setKeys: (state, action: PayloadAction<React.Key[]>) => {
            state.keys = action.payload
        },
        clearKeys: (state) => {
            state.keys = []
        }
    } 
})

// Part 4
export const { setKeys, clearKeys } = datatableSlice.actions
export default datatableSlice.reducer