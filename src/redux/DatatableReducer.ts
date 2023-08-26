// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DataType } from "../model/Datatable"

// Part 2
export interface DatatableInitialState {
  result: DataType[]
}
const initialState: DatatableInitialState = {
  result: JSON.parse(localStorage.getItem("Test2")||"[]")
}

// Part 3
export const datatableSlice = createSlice({
  name: 'datatable',
  initialState,
  reducers: {
    setDatatable: (state, action: PayloadAction<DataType[]>) => {
      state.result = action.payload
    }
  }
})

// Part 4
export const { setDatatable } = datatableSlice.actions
export default datatableSlice.reducer