// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Part 2
export interface LoadingInitialState {
  status: boolean
}
const initialState: LoadingInitialState = {
  status: false
}

// Part 3
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload
    }
  }
})

// Part 4
export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer