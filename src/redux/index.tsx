import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "./LoadingReducer";
import DatatableReducer from "./DatatableReducer";
import SelectRowReducer from "./SelectRowReducer";

export const store = configureStore({
    reducer: {
        loading: LoadingReducer,
        datatable: DatatableReducer,
        selectRow: SelectRowReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch